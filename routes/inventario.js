const { Router } = require('express');
const { getInventarios, getInventarioByID, createInventario, updateInventario, uploadImage, getFoto,deleteInventario} = require('../controllers/inventarioController');

const router = Router();

/**
 * Obtiene todos los inventarios
 */
router.get('/', getInventarios);

/**
 * Obtiene un inventario por id
 */
 router.get('/:id', getInventarioByID);

/**
 * Crear un inventario
 */
router.post('/', createInventario);

/**
 * Actualiza un inventario por id
 */
router.put('/:id', updateInventario);

/**
 * Sube foto el inventario
 */
router.post('/:id/upload-image', uploadImage);

/**
 * get foto de inventario
 */
router.get('/:id/image', getFoto);

//eliminar un inventario
router.delete('/:id', deleteInventario);

module.exports = router;