const express = require('express');
var router = express.Router();//interceptação das rotas
const controller = require('../controllers/clinica-controller');

//POST
router.post("/", controller.post);
//rota de get byid
router.get('/:clinicaId', controller.getById);
//rota get
router.get('/', controller.getAll);
//rota deletar
router.delete('/:delClinicaId',controller.delete); 
//rota altera
router.put('/:altClinicaId', controller.put);

module.exports = router;