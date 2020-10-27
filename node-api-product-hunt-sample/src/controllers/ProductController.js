const mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {

    //Lista todos os itens no banco
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },


    //Cria item no banco
    async store(req, res){
        const product = await Product.create(req.body);
        
        return res.json(product);
    },
};