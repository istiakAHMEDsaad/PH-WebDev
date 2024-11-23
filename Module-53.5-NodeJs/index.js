const express = require('express');
const cors = require('cors');
const products = require('./allProducts.json');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Go to "/allProducts" this link to open all category data');
});

// All Category 
app.get('/products', (req, res) => {
    res.send(products);
});

// All Category By Id
app.get('/products/:id', (req, res) => {
    const singlePID = req.params.id;
    console.log(`Selected products id: ${singlePID}`);
    const singleProductId = products.find(id => id.product_id === singlePID) || { error: "data not found" };
    res.send(singleProductId);
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});