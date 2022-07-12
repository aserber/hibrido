const express = require('express');
const router = express.Router();
const adminController = require ("../controllers/adminController");


/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminController.edit); 
router.patch('/edit/:id', adminController.update);
/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', adminController.destroy); 
/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminController.create); 
router.post('/', adminController.store); 

module.exports = router;