//const path = require('path');
//const fs = require('fs');
//const bcrypt = require('bcryptjs');
//const multer = require('multer');
//const { validationResult } = require('express-validator');

const controller = {
    register: (req, res) => {
        return res.render('usuario/registro');
    },
    login: (req, res) => {
        return res.render('usuario/login');
    },

}

module.exports = controller;
//create  logout show 