const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController')

//primeira rota
routes.get('/products',ProductController.index);//mostrar todos
routes.post('/products',ProductController.store);//criar
routes.get('/products/:id',ProductController.show);//mostrar por id
routes.put('/products/:id',ProductController.update);//atualizar
routes.delete('/products/:id',ProductController.destroy);


module.exports = routes;


