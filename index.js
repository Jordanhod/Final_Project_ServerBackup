const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
// const users = require ('/.users');
const products = require ('./products/products-model');

app.use(express.static('angular-final-project/dist'));
app.use(bodyParser.json());

app.get('/api/brides', (req, res)=>{
  res.json(products.getBridesDresses());
});

app.get('/api/bridesmaids', (req, res)=>{
  res.json(products.getBridesmaidsDresses());
});

app.post('/api/brides', (req, res)=>{
  productID = req.body.productID;
  res.json(products.getBridesProduct(productID));
});

app.post('/api/bridesmaids', (req, res)=>{
  productID = req.body.productID;
  res.json(products.getBridesmaidsProduct(productID));
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
