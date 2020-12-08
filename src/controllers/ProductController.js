const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(request, response){

        const { page = 1} = request.query;

        const products = await Product.paginate({}, { page, limit: 10 });
        
        return response.status(200).json(products);
    },

    async show(request, response){
        const product = await Product.findById(request.params.id);
        return response.json(product);
    },

    async create(request, response){

        const { title, description, url } = request.body;

        if( !title || !description || !url ) response.status(401).json({message: "Error, Some field is missing"});

        const product = await Product.create(request.body);

        return product ? response.status(200).json(product) : response.status(400).json({message: "Error"});
    },

    async update(request, response){

        const { id } = request.params;
 
        const product = await Product.findByIdAndUpdate(id, request.body, {new: true});

        return response.status(201).json(product);

    },

    async delete(request, response){
        await Product.findByIdAndRemove(request.params.id);

        return response.send();
    },
    
};