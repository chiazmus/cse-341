const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.helloWorldRoute);

routes.get('/professional', lesson1Controller.getProfessionalData);

routes.use('/contacts', require('./contacts'));

module.exports = routes;