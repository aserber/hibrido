const express = require('express');
const router = express.Router();
const adminController = require ("../controllers/adminController");
/*const path = require('path');
const multer = require('multer');


/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminController.edit); 
router.patch('/detail/:id', adminController.update);
/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 
/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminController.create); 
router.post('/', adminController.store); 
/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', adminController.detail); 

module.exports = router;