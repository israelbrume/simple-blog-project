// const { Router } = require('express');
const express3 = require('express');
const userRouter = express3.Router();
const { register, login} = require('../controllers/UserController');

userRouter.post('/register', register);

userRouter.post('/login', login);

module.exports = userRouter;
