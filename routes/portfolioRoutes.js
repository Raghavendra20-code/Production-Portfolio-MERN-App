const express = require('express');
const { sendEmailController } = require('../controller/portfolioController');

//router object

const router = express.Router();

//route

router.post('/sendEmail', sendEmailController)


module.exports = router

