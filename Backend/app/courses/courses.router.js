const coursesServices = require('./courses.service');
const express = require('express');
const router = express.Router();

module.exports = () => {

    router.post('/add-course', async (req, res, next) => {
        const resp = await coursesServices.addCourse(req.body.course);
        res.json({
            success: resp,
        });
    });

    router.post('/add-module', async (req, res, next) => {
        const resp = await coursesServices.addCourseModule(req.body.course, req.body.module);
        res.json({success: resp});
    });

    router.post('/add-course-discussion', async (req, res, next) => {
        const resp = await coursesServices.addDiscussion(req.body.course, req.body.discussion);
        res.json(resp);
    });

    router.post('/add-discussion-post', async (req, res, next) => {
        const resp = await coursesServices.addDiscussionPost(req.body.course, req.body.discussion, req.body.post);
        res.json(resp);
    });

    router.get('/discussion-posts-from', async (req, res, next) => {
        const resp = await coursesServices.getDiscussionPostsFrom(req.query.course, req.query.discussion, Number(req.query.start));
        res.json(resp);
    });


    router.get('/student-grades', async(req, res, next) => {
        const resp = await coursesServices.getStudentGrades(req.query.course, req.query.student);
        res.json(resp);
    });

    router.get('/discusssion-posts', async (req, res, next) => {
        const resp = await coursesServices.getDiscussionPosts(req.query.course, req.query.discussion);
        res.json(resp);
    });

    router.get('/course-discussions', async (req, res, next) => {
        const resp = await coursesServices.getDiscussions(req.query.course);
        res.json(resp);
    });

    router.get('/course-discussion-info', async (req, res, next) => {
        const resp = await coursesServices.getDiscussionInfo(req.query.course, req.query.discussion);
        res.json(resp);
    })

    router.post('/add-module-url', async (req, res, next) => {
        const resp = await coursesServices.addModuleUrl(req.body.course, req.body.module, req.body.content);
        res.json({success: resp});
    });

    router.post('/add-module-link', async (req, res, next) => {
        const resp = await coursesServices.addModuleLink(req.body.course, req.body.module, req.body.content);
        res.json({success: resp});
    });

    router.post('/add-module-quiz', async (req, res, next) => {
        const resp = await coursesServices.addModuleQuiz(req.body.course, req.body.module, req.body.content);
        res.json({success: resp});
    });

    router.get('/modules', async (req, res, next) => {
        const resp = await coursesServices.getCourseModules(req.query.course);
        res.json(resp);
    })

    router.get('/course-info', async (req, res, next) => {
        const resp = await coursesServices.getCourseInfo(req.query.key);
        res.json(resp);
    });

    router.get('/course', async (req, res, next) => {
        const resp = await coursesServices.getCourse(req.query.key);
        res.json(resp);
    });

    router.get('/courses', async ( req, res, next) => {
        const resp = await coursesServices.getAllCourses();
        res.json(resp);
    });

    router.get('/categories', async (req, res, next) => {
        const resp = await coursesServices.getCategories();
        res.json(resp);
    });
    
    router.get('/student-courses', async (req, res, next) => {
        const resp = await coursesServices.getMyCourses(req.query.student);
        res.json(resp);
    })

    router.get('/student-has-course', async (req, res, next) => {
        const resp = await coursesServices.studentHasCourse(req.query.student, req.query.course);
        res.json(resp);
    });

    return router;
}