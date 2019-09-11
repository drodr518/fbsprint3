const utilsServices = require('./utils.service');
const express = require('express');
const router =  express.Router();

module.exports = () => {
    router.get('/hello', async (req, res, next) => {
        const resp = await utilsServices.helloWorld();
        res.json({
            payload: resp,
        });
    });

    router.get('/dashboard', async (req, res, next) => {
        const resp = await utilsServices.listcourses();
        res.json({
            payload: resp,
        });
    });
    return router;
}