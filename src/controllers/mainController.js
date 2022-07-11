const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let bombon = products.filter(function(products){
	return products.category == 'bombon'
})
const torta = products.filter(function(products){
	return products.category == 'torta'
})
bombon = torta
const controller = {
	home: (req, res) => {
        return res.render('home');
    },

	index: (req, res) => {
		res.render('index', {
			torta,
			bombon,
			toThousand
		});
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


	register: (req, res) => {
        return res.render('registro.ejs');
    },
    login: (req, res) => {
        return res.render('login.ejs');
    },

    productostortas: (req, res) => {
        return res.render('productostortas.ejs');
    },

    producto: (req, res) => {
        return res.render('producto', {
			torta: torta,
			toThousand,
		});
    },
    
    compras: (req, res) => {
        return res.render('compras.ejs');
    },

    carrito: (req, res) => {
        return res.render('productos/carrito');
    },

};



module.exports = controller;
