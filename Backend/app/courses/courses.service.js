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
                    size: 0,
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

    async addDiscussionPost(course, discussion, post) {
        try {

            await database.ref('/courses/' + course + '/discussions/')
            .child(discussion).child('posts').push(
                {
                    user_name: post.user_name,
                    user_id: post.user_id,
                    date: post.date,
                    post: post.post
                }
            )
        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
    }

    async getDiscussionPosts(course, discussion) {
        let payload = {
            posts: []
        }

        try {

            let posts = await database.ref('/courses/' + course + '/discussions/' + discussion + '/posts/').orderByKey().once('value');

            if(!posts.hasChildren()) {
                return payload;
            }
            
            posts.forEach( (item) => {
                var post = item.toJSON();
                post.id = item.key;
                payload.posts.push(post);
            });

        }catch (err) {
            console.error(err);
        }

        return payload.posts;

    }

    async getDiscussionInfo(course, discussion_id) {
        
        try {

            var discussion = await database.ref('/courses/' + course + '/discussions/' + discussion_id).once('value');
            return {
                title: discussion.child("title").val(),
                description: discussion.child("description").val(),
                isClosed: discussion.child("isClosed").val()
            };

        }catch (err) {
            console.error(err);
        }

        return {title: "", description: "", isClosed: true};
    }

    async addCourseModule(course, module_obj) {
        try {
            var courses = await database.ref('/courses').orderByKey().equalTo(course).once('value');
            if(courses.numChildren() != 1) {
                throw false;
            }

            courses.child(course).child('modules').ref.push({
                name: module_obj.name
            });

        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
    }

    async addModuleUrl(course_key, module_key, content) {
        try {
            var courses = await database.ref('/courses').orderByKey().equalTo(course_key).once('value');
            if(courses.hasChildren) {
                courses.child(course_key).child('modules').child(module_key).child('content').ref.push({
                    title: content.title,
                    url: content.url
                });
            } else {
                throw false;
            }
        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
    }

    async addModuleLink(course_key, module_key, content) {
        try {
            var courses = await database.ref('/courses').orderByKey().equalTo(course_key).once('value');
            if(courses.hasChildren) {
                courses.child(course_key).child('modules').child(module_key).child('content').ref.push({
                    title: content.title,
                    link: content.link
                });
            } else {
                throw false;
            }
        } catch (err) {
            console.error(err);
            return false;
        }

        return true;
    }


    async addModuleQuiz(course_key, module_key, content) {
        try {
            var courses = await database.ref('/courses').orderByKey().equalTo(course_key).once('value');
            if(courses.hasChildren) {
                var items = courses.child(course_key).child('modules').child(module_key).child('content').ref.push({
                    title: content.title,
                    isTimed: content.isTimed,
                    time: content.time,
                    dueDate: content.dueDate,
                    attempts: content.attempts,
                });

                content.items.forEach( (item) => {
                    items.child('items').ref.push({
                        val: item.val,
                        question: item.question,
                        answer: item.answer,
                        options: item.options
                    });
                });
            } else {
                throw false;
            }
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

        let student = await database.ref('/students/' + user + '/enrolled').once('value');


        student.forEach( (item) => {
            payload.courses.push(item.toJSON());
        })

        let courses = await database.ref('/courses').once('value');
        for(var i =0; i < payload.courses.length; i++){
            payload.courses[i].name = (courses.child(payload.courses[i].id).child('name').val());
        }

        return payload.courses;
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
                instructor: course.instructor_id,
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

    async getDiscussions(course_key) {
        let payload = {
            discusions: []
        };

        try {

            let discussions = await database.ref('/courses/' + course_key + '/discussions')
            .once('value');

            discussions.forEach( (discussion) => {
                payload.discusions.push({
                    id: discussion.key,
                    title: discussion.child('title').val(),
                    description: discussion.child('description').val()
                });
            });

        } catch (err) {
            console.error(err);
        }

        return payload.discusions;
    }

    async addDiscussion(course_key, newDiscussion) {
        
        try {

            let courses = await database.ref('/courses')
            .orderByKey()
            .equalTo(course_key)
            .once('value');

            if(courses.numChildren() > 1) {
                return false;
            }

            courses.forEach((course) => {
                course.child('discussions').ref.push({
                    title: newDiscussion.title,
                    description: newDiscussion.description,
                    isClosed: newDiscussion.isClosed
                });
            });
        } catch(err) {
            console.error(err);
            return false;
        }

        return true;
            
    }

    async getCourseModules(courses_id) {

        let payload = {
            modules: []
        };

        let tempModule;

        try {

            var courseModules = await database.ref('/courses/' + courses_id + '/modules').once('value');

            courseModules.forEach( (mod) => {
                tempModule = {name: '', resources: []};

                tempModule.name = mod.child('name').val();

                mod.child('content').forEach( (item) => {
                    tempModule.resources.push({
                        title: item.child('title').val(),
                        url: item.child('url').val(),
                        link: item.child('link').val(),
                        isTimed: item.child('isTimed').val()
                    });
                });

                payload.modules.push(tempModule);
            });
        } catch (err) {
            console.error(err);
        }

        return payload.modules;
    }

    async studentHasCourse(student_id, course_id) {
        let reference = await database.ref('/students/' + student_id + '/enrolled/')
        .orderByChild('id')
        .equalTo(course_id)
        .once('value');

        if(reference.hasChildren()) {
            return true;
        }

        return false;
    }
}

module.exports = new CoursesService();