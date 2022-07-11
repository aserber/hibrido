//const path = require('path');
//const fs = require('fs');
//const bcrypt = require('bcryptjs');
//const multer = require('multer');
//const { validationResult } = require('express-validator');

const controller = {
    register: (req, res) => {
        return res.render('usuarios/registro');
    },
    login: (req, res) => {
        return res.render('usuarios/login');
    },

}

module.exports = controller;
//create  logout show 