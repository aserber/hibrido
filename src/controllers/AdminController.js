//delete-edit-create-destroy-store-update-search productos y usuarios

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {	
    // Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('admin/product-edit-form', {productToEdit})
	},

    // Create - Form to create
	create: (req, res) => {
		res.render('admin/product-create-form')
	},

    	// Create -  Method to store
	store: (req, res) => {
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: 'default-image.png'
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
    // Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},
    	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

}
module.exports = controller;