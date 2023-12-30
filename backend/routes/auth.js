const express = require('express')
const {home , register} = require('../controller/auth-controller')
const contactus = require('../controller/contactus')
const forgotpassword = require('../controller/forgotpassword')
const login = require('../controller/login')
const QuizCreate = require('../controller/Quizcreate')
const quizdisplay = require('../controller/quizdisplay')
const updatepassword = require('../controller/updatepassword')
const router = express.Router()

router.get('/', home);

router.post('/register', register);

router.post('/contact', contactus);
router.post('/login', login);

router.post('/quizcreate', QuizCreate);

router.post('/forgotpassword', forgotpassword);
router.post('/updatepassword', updatepassword);
router.get('/quizdisplay', quizdisplay);

module.exports = router;