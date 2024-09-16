const { Router } = require('express');
const { validateLogin, validateRegister } = require('../middleware/login.validation');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/login', validateLogin, userController.login);
userRouter.post('/register', validateRegister, userController.createUser);

userRouter.get('/all', userController.getAllUsers);

module.exports = {
  userRouter,
};