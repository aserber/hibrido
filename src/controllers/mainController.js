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
        return res.render('web/home');
    },

	index: (req, res) => {
		res.render('web/index', {
			Pasteleria,
			Chocolate,
			toThousand
		});
	},
    //index: (req, res) => {
	//	res.render('productos/productos', {
	//		products,
	//		toThousand
	//	})
	//},

};



module.exports = controller;
