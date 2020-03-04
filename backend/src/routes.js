const {Router} = require('express');
const DecController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', DecController.index);
routes.post('/devs', DecController.store);
routes.get('/search', SearchController.index);

module.exports = routes;