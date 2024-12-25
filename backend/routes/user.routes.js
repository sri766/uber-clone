const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

const {body} = require('express-validator');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname'),
    body('password').isLength({min: 6}),
],
    userController.registerUser
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}),
],
    userController.loginUser
);


module.exports = router;