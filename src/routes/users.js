const express = require ("express");
const router= express.Router();
const {body} = require ("express-validator");
const controller = require ("../controllers/userController");

router.get ("/", controller.index);

router.get("/create", controller.create);

router.post ("/",controller.store);

router.get ("/:id", controller.show);

const validateCreateForm = [
    body ("first_name").notEmpty().withMessage("Debes completar el campo de nombre"),
    body ("last_name").notEmpty().withMessage("Debes completar el campo de nombre"),
    body ("email").isEmail().withMessage("Debes completar un email valido"),
    
];

module.exports = router;