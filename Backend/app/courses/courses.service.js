const database = require('firebase-admin').database();

const MAX_POSTS = 50;

class CoursesService {
    constructor() {}


    async getAssessmentsList(course_id) {
        let assessments = [];
        try {
            let courseModules = await database.ref('/courses/' + course_id + '/modules').once('value');

            courseModules.forEach( (mod) => {
                mod.child("content").forEach( (cont) => {
                    if(cont.hasChild('isTimed')) {
                        console.log(cont.child('title').val());
                        const assessment = cont.toJSON();
                        assessments.push({
                            id: cont.key,
                            title: assessment.title,
                            dueDate: assessment.dueDate,
                            outOf: assessment.outOf,
                        });
                    }
                })
            });


        } catch(err) {
            console.error(err);
        }

        return assessments;
    }

    async getStudentRecord(student_id, course_id, assessment_id) {
        try {
            let records = await database.ref('/students/' + student_id + '/enrolled')
            .orderByChild('id')
            .equalTo(course_id)
            .once('value');

            records.child('records').child(assessment_id).forEach( (record) => {
                return {
                    doneOn: record.child('doneOn').val(),
                     score: record.child('score').val()
                    };
            });

        } catch(err) {
            console.error(err);
        }

        return {
            doneOn: null,
             score: null
            };
    }

    async getStudentGrades(course_id, student_id) {

        let assessments = await this.getAssessmentsList(course_id);

        if(assessments.length < 1) return assessments;

        try {

            assessments.forEach((item) => {
                var record = this.getStudentRecord(student_id, course_id, item.id);
                item.doneOn = record.doneOn || null;
                item.score = record.score || null;
            });
            
        } catch(err) {
            console.error(err);
        }

        return assessments;

    }

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

    async getNumberOfPosts(course, discussion) {
        try {
            let posts = await database.ref('/courses/' + course + '/discussions/' + discussion + '/posts/').once('value');
            return posts.numChildren();
        } catch (err) {
            console.error(err);
        }

        return 0;
    }


    async getDiscussionPostsFrom(course, discussion, start) {
        let payload = {
            posts: [],
            total: 0,
        }

        let loadedPosts = 0;

        try {

            payload.total = await this.getNumberOfPosts(course, discussion);

            let posts = await database.ref('/courses/' + course + '/discussions/' + discussion + '/posts/')
            .orderByKey()
            .limitToLast(payload.total - start)
            .once('value');

            if(!posts.hasChildren()) {
                return payload;
            }
            
            posts.forEach( (item) => {
                if(loadedPosts < MAX_POSTS) {
                    var post = item.toJSON();
                    post.id = item.key;
                    payload.posts.push(post);
                } else {
                    throw "Not error, just interrup for each with a throw";
                }
                loadedPosts++;
            });

        }catch (err) {
            console.error(err);
        }

        return payload;

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
                

                //await database.ref('/courses/' + course_key + '/assessments').push({id: items.key});
                let total = 0;

                content.items.forEach( (item) => {
                    total += item.val;
                    items.child('items').ref.push({
                        val: item.val,
                        question: item.question,
                        answer: item.answer,
                        options: item.options
                    });
                });

                items.update({outOf: total});


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