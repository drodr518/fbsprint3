const database = require('firebase-admin').database();

class CoursesService {
    constructor() {}

    async addCourse(newCourse) {
        try {

            await database.ref('/courses').push(
                {
                    name: newCourse.name,
                    description: newCourse.description,
                    instructor_id: newCourse.instructor_id,
                    instructor_name: newCourse.instructor_name,
                    modules: [],
                    assignments: [],
                    students: [],
                    discussions: [],
                    size: newCourse.size,
                    MAX_SIZE: newCourse.MAX_SIZE,
                    isOpen: newCourse.isOpen,
                }
            );
        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
        

    }

    async getMyCourses(user) {

        let payload = {
            courses: []
        };

        let users = await database.ref('/users').orderByKey().equalTo(user.key).once('value');
        if(!users.hasChildren()) {
            return null;
        } else if (users.numChildren() > 1) {
            return null;
        } else {
            users.forEach( (member) => {
                member.child('enrolled').val().forEach( (course) => {
                    payload.courses.push()
                });
            });
        }


        return courses;
    }

    async getCourse(key) {

        let courses = await database.ref('/courses').orderByKey().equalTo(key).once('value');
        courses.forEach( (course) => {
            return course.toJSON();
        });
    }

    async getCourseInfo(key) {

        let courses = await database.ref('/courses').orderByKey().equalTo(key).once('value');
        courses.forEach( (course) => {
            var course = member.toJSON();
            return {
                id: member.key,
                name: course.name,
                img: course.img,
                description: course.description,
                instructor: course.instructor,
            };
        });
    }


    async getAllCourses() {
        
        let courses = await database.ref('/courses').orderByKey().equalTo(key).once('value');
        return courses.toJSON();
    }

    async getCoursesInfo() {

        let payload = [];

        let courses = await database.ref('/courses').orderByKey().equalTo(key).once('value');

        courses.forEach( (member) => {
            var course = member.toJSON();
            payload.push({
                id: member.key,
                name: course.name,
                img: course.img,
                description: course.description,
                instructor: course.instructor,
            });
        });
    }
}

module.exports = new CoursesService();