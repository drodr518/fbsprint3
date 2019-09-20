const usersServices = require('./users.service');
const express = require('express');
const router = express.Router();

module.exports = (passport) => {

    router.post('/add-student', async (req, res, next) => {
        const resp = await usersServices.addStudent(req.body.user);
        res.json(resp);
    });

    router.post('/add-instructor', async (req, res, next) => {
        const resp = await usersServices.addInstructor(req.body.user);
        res.json(resp);
    })

    router.post('/enroll-student', async (req, res, next) => {
        const resp = await usersServices.enrollIn(req.body.student, req.body.course);
        res.json(resp);
    });

    router.get('/instructor-info', async (req, res, next) => {
        const resp = await usersServices.getInstructor(req.query.id);
        res.json(resp);
    });

    router.post('/login', passport.authenticate('local', {}), async (req, res, next) => {
        const token = await usersServices.login(req.user);
        res.status(200).json({
            payload: token
        });
    });

    return router;
}