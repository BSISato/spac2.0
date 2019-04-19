const express = require('express');
var router = express.Router();//interceptação das rotas
const controller = require('../controllers/cliente-controller');

//var Produto = require('../app/models/product'); ????

//POST
router.post("/", controller.post);
//rota de get byid
router.get('/:clienteId', controller.getById);
//rota get
router.get('/', controller.getAll);
//rota deletar
router.delete('/:delClienteId',controller.delete); 
//rota altera
router.put('/:altClienteId', controller.put);

module.exports = router;