const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(request, response){
        const products = await Product.find();
        
        return response.status(200).json(products);
    },

    async create(request, response){
        const product = await Product.create(request.body);

        return product ? response.status(200).json(product) : response.status(400).json({message: "Error"});
    },

    async update(request, response){

        const { id } = request.params;
        const { title, description, url } = request.body;
 
        const product = await Product.find({ _id: id });

        const productAux = {
            title, description, url
        }

        console.log(productAux);

        // await product.update(productAux);

        return response.status(201).json(productAux);

    },

    delete(request, response){

    },
    
};