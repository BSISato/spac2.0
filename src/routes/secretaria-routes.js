const express = require('express');
var router = express.Router();//interceptação das rotas
const controller = require('../controllers/secretaria-controller');

//var Produto = require('../app/models/product'); ????

//POST
router.post("/", controller.post);
//rota de get byid
router.get('/:secretariaId', controller.getById);
//rota get
router.get('/', controller.getAll);
//rota deletar
router.delete('/:delSecretariaId',controller.delete); 
//rota altera
router.put('/:altSecretariaId', controller.put);

module.exports = router;