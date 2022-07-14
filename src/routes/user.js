const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/registro', userController.register); //u

router.get('/login', userController.login); //u


module.exports = router;