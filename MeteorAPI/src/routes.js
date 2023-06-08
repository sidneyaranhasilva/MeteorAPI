const express = require('express');
const router = express.Router();

const meterioController = require('./controllers/meterioController')

/*dados*/
router.get('/dados', meterioController.buscarTodos)
router.get('/dados/dispositivo/:dispositivo', meterioController.buscarTodosByDispositivo)
router.get('/dados/now/:dispositivo', meterioController.maisAtual)
router.get('/dados/:codigo', meterioController.findById)
router.get('/dados/:codigo/dispositivo/:dispositivo', meterioController.findById)
router.post('/dados', meterioController.inserir)


/*dispositivo*/
const dispositivoController = require('./controllers/dispositivoController')
router.get('/dispositivos', dispositivoController.buscarTodos)
router.get('/dispositivos/:codigo', dispositivoController.findById)

module.exports = router;