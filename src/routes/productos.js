// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 
router.get('/:categoria', productsController.productCategory); 

/*** SEARCHE ONE PRODUCT ***/ 
router.get('/search', productsController.search); 





module.exports = router;
