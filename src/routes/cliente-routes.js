const express = require('express');
var router = express.Router();//interceptação das rotas
const controller = require('../controllers/cliente-controller');
const authService = require('../services/auth-service');


//var Produto = require('../app/models/product'); ????

//POST
router.post("/",authService.authorize, controller.post);
//rota de get byid
router.get('/:clienteId',authService.authorize, controller.getById);
//rota get
router.get('/',authService.authorize, controller.getAll);
//rota deletar
router.delete('/:delClienteId',authService.authorize, controller.delete); 
//rota altera
router.put('/:altClienteId',authService.authorize, controller.put);

module.exports = router;