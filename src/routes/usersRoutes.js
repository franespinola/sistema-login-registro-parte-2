const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers');
const validationFormSignUp = require('../middlewares/validationFormSIgnUp');
const validationMiddleware = require('../middlewares/validationFormSIgnUp')
const authMiddleware =require('../middlewares/authMiddlware')
//login routes
router.get('/login',authMiddleware,usersControllers.login)
router.post('/auth',usersControllers.loginPost)

//register routes
router.get('/register',authMiddleware,usersControllers.register)
router.post('/register',validationFormSignUp,usersControllers.registerPost)

module.exports=router
