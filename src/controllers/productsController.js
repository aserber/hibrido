const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('productos', {
			products,
			toThousand
		})
	},
//	producto:(req, res) => {
//		res.render('producto', {
//			products,
//			toThousand
//		})
//	},
//	producto2:(req, res) => {
//		res.render('productostortas', {
//			products,
//			toThousand
////		})
//	},
	

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('detail', {
			product,
			toThousand
		})
	},

	productCategory:  (req, res) => {
		let categoria = req.params.categoria
		let productsFiltered = products.filter(product => product.category == categoria)
		res.render('producto', {
			productsArray : productsFiltered,
			category: categoria,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
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

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', {productToEdit})
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

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},
	search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
		res.render('results', { 
			products: productsToSearch, 
			search,
			toThousand,
		});
	},



	



};

module.exports = controller;