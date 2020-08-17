const routes = require('express').Router();
const userController = require('../controllers/userController');
const adressController = require('../controllers/adressController');

routes.get('/users', userController.index);
routes.post('/users', userController.store);

routes.get('/users/:user_id/adresses', adressController.index);
routes.post('/users/:user_id/adresses', adressController.store);

module.exports = routes;