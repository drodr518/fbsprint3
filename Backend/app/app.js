const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var helmet = require('helmet');
const errorHandler = require('./middleware/error-handler.middleware');

/*
const firebase = require('firebase-admin');
const firebaseAccountConfig = require('../firebase-config.json');
firebase.initializeApp({
	credential: firebase.credential.cert(firebaseAccountConfig),
	databaseURL: 'https://geektext002.firebaseio.com'
});

const passport = require('passport');
require('./security/passport.strategy')(passport);

app.use(passport.initialize());
app.use(passport.session());*/

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	next();
});

const utilsRoute = require('./utils/utils.router')();
app.use('/utils', utilsRoute);

app.use(errorHandler);

module.exports = app;
