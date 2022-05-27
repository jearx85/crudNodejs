const { Router } = require('express');
const { getEstados, getEstadoById, createEstado, updateEstadoById, deleteEstadoById } = require('../controllers/estadoController');

const router = Router();

router.get('/',getEstados);

router.get('/:id',getEstadoById);

router.post('/', createEstado);

router.put('/:id', updateEstadoById);

router.delete('/:id', deleteEstadoById);

module.exports = router;