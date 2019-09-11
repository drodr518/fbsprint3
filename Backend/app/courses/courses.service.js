const database = require('firebase-admin').database();

class CoursesService {
    constructor() {}

    async addCourse(newCourse) {
        try {

            let courseId = await database.ref('/courses').push(
                {
                    name: newCourse.name,
                    description: newCourse.description,
                    instructor_id: newCourse.instructor_id,
                    instructor_name: newCourse.instructor_name,
                    modules: [],
                    assignments: [],
                    students: [],
                    discussions: [],
                    MAX_SIZE: newCourse.MAX_SIZE,
                    isOpen: newCourse.isOpen,
                }
            );

            let cat = await database.ref('/categories/' + newCourse.category).once('value');
            cat.ref.push({ courseId: courseId.key })
            
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
        let myCourse;
        let courses = await database.ref('/courses').orderByKey().equalTo(key).once('value');
        courses.forEach( (member) => {
            var course = member.toJSON();
            myCourse = course;
            myCourse.key = member.key;
        });

        return myCourse;
    }

    async getCourseInfo(key) {

        let myCourse;

        let courses = await database.ref('/courses').orderByKey().equalTo(key).once('value');
        courses.forEach( (member) => {
            var course = member.toJSON();
            myCourse = {
                id: member.key,
                name: course.name,
                img: course.img,
                description: course.description,
                instructor: course.instructor,
            };
        });

        return myCourse;
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

    async getCategories() {
        let payload = {
            categories : []
        };

        let categories = await database.ref('/categories').once('value');
        categories.forEach( (category) => {
            payload.categories.push(category.key);
        })

        return payload.categories;
    }
}

module.exports = new CoursesService();