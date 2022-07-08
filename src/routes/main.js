// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.home); 

router.get('/index', mainController.index); 

router.get('/search', mainController.search); 

router.get('/registro', mainController.register);

router.get('/login', mainController.login);

//router.get('/adminproduc',  mainController.adminproduc);

router.get('/productostortas', mainController.productostortas);

router.get('/compras', mainController.compras);

router.get('/producto', mainController.producto);

router.get('/carrito', mainController.carrito);

//router.get('/descproducto', mainController.descproducto);






module.exports = router;
