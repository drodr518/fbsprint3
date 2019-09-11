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