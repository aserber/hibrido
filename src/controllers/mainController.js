const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let Chocolate = products.filter(function(products){
	return products.category == 'Chocolate'
})
const Pasteleria = products.filter(function(products){
	return products.category == 'Pasteleria'
})
Chocolate = Pasteleria
const controller = {
	home: (req, res) => {
        return res.render('home');
    },

	index: (req, res) => {
		res.render('index', {
			Pasteleria,
			Chocolate,
			toThousand
		});
	},



	register: (req, res) => {
        return res.render('registro.ejs');
    },
    login: (req, res) => {
        return res.render('login.ejs');
    },

    //productosTortas: (req, res) => {
      //  return res.render('productosTortas.ejs');
    //},

   // producto: (req, res) => {
      //  return res.render('producto', {
		//	Pasteleria: Pasteleria,
		//	toThousand,
	//	});
    //},
    
    compras: (req, res) => {
        return res.render('compras.ejs');
    },

    carrito: (req, res) => {
        return res.render('productos/carrito');
    },

};



module.exports = controller;
