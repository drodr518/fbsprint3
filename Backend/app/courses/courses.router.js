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

    router.get('/course-info', async (req, res, next) => {
        const resp = await coursesServices.getCourseInfo(req.query.key);
        res.json(resp);
    });

    router.get('/get-course', async (req, res, next) => {
        const resp = await coursesServices.getCourse(req.query.key);
        res.json(resp);
    });

    router.get('/get-courses', async ( req, res, next) => {
        const resp = await coursesServices.getAllCourses();
        res.json(resp);
    });

    router.get('/get-categories', async (req, res, next) => {
        const resp = await coursesServices.getCategories();
        res.json(resp);
    });

    return router;
}