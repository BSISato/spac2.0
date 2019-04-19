const express = require('express');
var router = express.Router();//interceptação das rotas
const controller = require('../controllers/medico-controller');


//POST
router.post("/", controller.post);
//rota de get byid
router.get('/:medicoId', controller.getById);
//rota get
router.get('/', controller.getAll);
//rota deletar
router.delete('/:delMedicoId',controller.delete); 
//rota altera
router.put('/:altMedicoId', controller.put);

module.exports = router;