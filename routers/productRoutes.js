'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {

    // getAll
    app.get('/api/product', async (req, res) => {
        let product = await Product.find();
        return res.status(200).send(product);
    });

    // create
    app.post('/api/product', async (req, res) => {
        let product = await Product.create(req.body);
        return res.status(201).send({
            error: false,
            product
        });
    });

    // update
    app.put('/api/product/:id', async(req, res) => {
        const {id} = req.param;
        let product = await Product.findByIdAndUpdate(id, req.body);

        return res.status(200).send({
            error: false,
            product
        });
    });

    // delete
    app.delete('/api/product/:id', async(req, res) => {
        const {id} = req.param;
        let product = await Product.findByIdAndDelete(id);
        return res.status(200).send({
            error: false,
            product
        });
    });

}