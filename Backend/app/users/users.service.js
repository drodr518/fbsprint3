const database = require('firebase-admin').database();
const jwt = require('jsonwebtoken');
const crypto = require('bcrypt');
const coursesService = require('../courses/courses.service');

class UsersSerivce {
    constructor() {}


    /**
     * 
     * @param {email: string, contactEmail: string, f_name: string, l_name: string, password: string} user 
     * 
     * @returns true if successfully added instructor to database.
     */
    async addInstructor(user) {
        console.log(user);
        try {
            let users = await database.ref('/instructors')
            .orderByChild('email')
            .equalTo(user.email)
            .once('value');

            if(!users.hasChildren()) {
                const salt = await crypto.genSalt();
                const hashedPass = await crypto.hash(user.password, salt);
                await database.ref('/instructors').push({
                    email: user.email,
                    contactEmail: user.contactEmail,
                    f_name: user.f_name,
                    l_name: user.l_name,
                    password: hashedPass,
                    auth: 1

                })

                return true;
            }

        } catch (err) {
            console.error(err);
        }

        return false;
    }


    /**
     * 
     * @param {key: string, name: string} user 
     * 
     * @return true if successfully added new user
     */
    async addStudent(user) {
        
        try {
            var users = await database.ref('/students').orderByKey().equalTo(user.key).once('value');
            if(!users.hasChildren()) {
                await database.ref('/students').child(user.key).set({
                    name: user.name,
                });
            }
        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
    }

    /**
     * 
     * @param {string} student_key 
     * @param {string} course_key 
     * 
     * @return true if successfully added student to course
     */
    async enrollIn(student_key, course_key) {

        if(!coursesService.studentHasCourse(student_key, course_key)) return false;
        try {

            let users = await database.ref('/students').orderByKey().equalTo(student_key).once('value');
            if(users.numChildren() != 1) {
                throw false;
            }
            users.child(student_key).child('enrolled').ref.push({id: course_key});

            await database.ref('/courses/' + course_key + '/students').push({id: student_key});
        } catch (err) {
            console.error(err);
            return err;
        }

        return true;
    }


    async getAllInstructors() {

        let payload = [];

        let instructorsRef =  await database.ref('/instructors').orderByChild('l_name').once('value');

        instructorsRef.forEach((instructor) => {
            payload.push({
                name: instructor.child('l_name').val() + ', ' + instructor.child('f_name').val(),
                id: instructor.key,
            });
        })

        return payload;
    }

    

    /**
     * 
     * @param {string} id instructor id
     * 
     * @return {concatEmail: string, name: string} isntructor object
     */
    async getInstructor(id) {
        var resp = {
            contactEmail:'',
            name: '',
        };

        try {

            var instructor = await database.ref('/instructors/' + id).once('value');
            resp.contactEmail = instructor.child('contactEmail').val();
            resp.name = instructor.child('f_name').val() + ' ' + instructor.child('l_name').val();
            
        } catch (err) {
            console.log(err);
        }

        return resp;
    }


    /**
     * 
     * @param {key: string, email: string, concatEmail: string, name: string, auth: number} user
     * 
     * @return token: jwt token
     */
    async login(user) {
        const userInfo = {
            id: user.key,
            name: user.f_name + ' ' + user.l_name,
            email: user.email,
            contactEmail: user.concatEmail,
            auth: user.auth
        }

        const token = await jwt.sign(userInfo, '85tHm4SdMr7QmT2Xsi20Kcx3XUI3OGYf8siO5JMiThZICLMCtge01L3zDG0qBXx',
        {
            expiresIn: '7d',
            algorithm: 'HS512'
        });

        return token;
    }
}

module.exports = new UsersSerivce();