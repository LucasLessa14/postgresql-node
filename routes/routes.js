const routes = require('express').Router();
const userController = require('../controllers/userController');
const adressController = require('../controllers/adressController');
const techController = require('../controllers/techController');

routes.get('/users', userController.index);
routes.post('/users', userController.store);

routes.get('/users/:user_id/adresses', adressController.index);
routes.post('/users/:user_id/adresses', adressController.store);

routes.get('/users/:user_id/techs', techController.index);
routes.post('/users/:user_id/techs', techController.store);
routes.delete('/users/:user_id/techs', techController.delete);

module.exports = routes;