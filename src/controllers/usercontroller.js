//const path = require('path');
//const fs = require('fs');
//const bcrypt = require('bcryptjs');
//const multer = require('multer');
const { validationResult } = require('express-validator');
const User = require ("../database/models/User");

const controller = {
    register: (req, res) => {
        return res.render('usuario/registro');
    },
    login: (req, res) => {
        return res.render('usuario/login');
    },
    profile: (req,res) => {
        return res.render ("usuario/login");
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
           return res.render ("usuario/registro", {
            errors: resultValidation.mapped(),
              oldData: req.body
            });
        }   
            User.create(req.body);
            return res.send ("ok");
     }

}

module.exports = controller;
//create  logout show 