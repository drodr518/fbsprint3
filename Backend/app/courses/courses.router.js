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

    return router;
}