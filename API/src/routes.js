const express = require('express');
const routes = express.Router();

const Controller = require('./controllers/Controller');

routes.get('/', Controller.index);
//routes.get('/:id', ProductController.show);
routes.post('/', Controller.store);
routes.put('/:id', Controller.update);
//routes.delete('/:id', Controller.destroy);

module.exports = routes;