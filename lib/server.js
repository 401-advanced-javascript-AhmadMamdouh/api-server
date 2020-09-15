'use strict';

require('dotenv').config();

const express = require('express');

const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');

const app = express();

app.use(express.json());
app.use(timeStamp);
app.use(logger);

////////////// Routs \\\\\\\\\\\\\\\\\\\\\
/////////////// Products \\\\\\\\\\\\\\\\\\\\\\\\
let araryOfProduct = [];

app.post('/products',timeStamp ,logger, (req, res) => {
    const { catagory, name, display_name, description } = req.body;
    const record = { catagory, name, display_name, description };
    araryOfProduct.push(record);
    res.status(200).json(record);
});


app.get('/products', timeStamp , logger,  (req, res) => {
    const count = araryOfProduct.length;
    const results = araryOfProduct;
    res.status(200).json({ Count: count, Results: results });

});


app.get('/products/:id', timeStamp, logger, (req, res) => {
    const idProduct = req.params.id;
    res.status(200).json(araryOfProduct[idProduct]);

});


app.put('/products/:id',timeStamp, logger,  (req, res) => {
    const { catagory, name, display_name, description } = req.body;
    const record = { catagory, name, display_name, description };
    const idProduct = req.params.id;
    araryOfProduct[idProduct] = record;
    res.status(200).json(araryOfProduct[idProduct]);

});

app.patch('/products/:id', timeStamp, logger, (req, res) => {
    const { catagory, name, display_name, description } = req.body;
    const newRecord = { catagory, name, display_name, description };
    const idProduct = req.params.id;
    araryOfProduct[idProduct] = newRecord;
    res.status(200).json(araryOfProduct[idProduct]);
})


app.delete('/products/:id', timeStamp, logger, (req, res) => {
    const idProduct = req.params.id;
    araryOfProduct.splice(idProduct, 1);
    res.status(200).json('Products Deleted');
});

////////////////Catagories \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let araryOfCategories = [];

app.post('/categories', timeStamp, logger, (req, res) => {
    const { name, display_name, description } = req.body;
    const record = { name, display_name, description };
    araryOfCategories.push(record);
    res.status(200).json(record);
});


app.get('/categories', timeStamp, logger, (req, res) => {
    const count = araryOfCategories.length;
    const results = araryOfCategories;
    res.status(200).json({ Count: count, Results: results });

});


app.get('/categories/:id',timeStamp,  logger, (req, res) => {
    const idCategories = req.params.id;
    res.status(200).json(araryOfCategories[idCategories]);

});


app.put('/categories/:id', timeStamp, logger, (req, res) => {
    const { name, display_name, description } = req.body;
    const record = { name, display_name, description };
    const idCategories = req.params.id;
    araryOfCategories[idCategories] = record;
    res.status(200).json(araryOfCategories[idCategories]);

});

app.patch('/categories/:id',  timeStamp, logger,(req, res) => {
    const { name, display_name, description } = req.body;
    const newRecord = {name, display_name, description };
    const idCategories = req.params.id;
    araryOfCategories[idCategories] = newRecord;
    res.status(200).json(araryOfCategories[idCategories]);
})


app.delete('/categories/:id', timeStamp, logger, (req, res) => {
    const idCategories = req.params.id;
    araryOfCategories.splice(idCategories, 1);
    res.status(200).json('Categories Deleted');
});


///////////////// error Handler \\\\\\\\\\\\\

app.use('*', timeStamp, logger, notFound);
app.use(serverError);

/////////////////Exports \\\\\\\\\\\\\\
module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`listening on  PORT :${PORT}`));
    },
};

























module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.port || 3000;
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    }
};