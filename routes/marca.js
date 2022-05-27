const { Router } = require('express');
const { getMarcas, getMarcaById, createMarca, updateMarcaById, deleteMarcaById } = require('../controllers/marcaController');

const router = Router();

router.get('/',getMarcas);

router.get('/:id',getMarcaById);

router.post('/', createMarca);

router.put('/:id', updateMarcaById);

router.delete('/:id', deleteMarcaById);

module.exports = router;