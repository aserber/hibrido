const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const uploadFile = require ("../middlewares/multerMiddleware");
const validator = require ("../middlewares/validateRegisterMiddlewares");



router.get('/registro', userController.register); //u

// uploadFile.single("avatar"),
router.post('/registro', validator.register , userController.processRegister);

router.get('/login', userController.login); //u

router.get ("../profile/:userId", userController.profile);

module.exports = router;