const database = require('firebase-admin').database();
const jwt = require('jsonwebtoken');
const crypto = require('bcrypt');

class UsersSerivce {
    constructor() {}

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

    async enrollIn(student_key, course_key) {
        try {

            let users = await database.ref('/students').orderByKey().equalTo(student_key).once('value');
            if(users.numChildren() != 1) {
                throw false;
            }
            users.child('Courses').ref.push({id: course_key});
        } catch (err) {
            console.error(err);
            return err;
        }

        return true;
    }

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

    async login(user) {
        const userInfo = {
            id: user.key,
            name: user.f_name + ' ' + user.l_name,
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