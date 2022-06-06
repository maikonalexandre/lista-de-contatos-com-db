const express = require('express');
const DetalhesController = require('./controllers/DetalhesController');
const CreateNewContactController = require('./controllers/CreateNewContactController');
const CreateNomeController = require('./controllers/CreateNomeController');
const indexRenderController = require('./controllers/indexRenderController');
const DeleteController =require('./controllers/DeleteController');

const route = express.Router();

route.get('/',indexRenderController.render);
route.post('/',indexRenderController.find);


route.get('/detalhes/:nome', DetalhesController.view);

route.get('/novonome', CreateNomeController.createview);
route.post('/novonome', CreateNomeController.create);

route.get('/novocontato/:nome', CreateNewContactController.create);
route.post('/novocontato/:nome', CreateNewContactController.save);

route.get('/nomejaexistente', (req, res)=> res.render("nomejaexistente"));


route.get('/delete/:nome', DeleteController.deletenome);
route.get('/delete/:nome/:contato', DeleteController.deletecontato);


module.exports = route;