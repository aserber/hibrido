const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const uploadFile = require ("../middlewares/multerMiddleware");
//const validations = require ("../middlewares/validateRegisterMiddleware");



router.get('/registro', userController.register); //u

// router.post('/registro', uploadFile.single("avatar"), validations , userController.processRegister);

router.get('/login', userController.login); //u

router.get ("../profile/:userId", userController.profile);

module.exports = router;