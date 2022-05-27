const { Router } = require('express');

const router = Router();

const { getUsuarios, createUsuario, deleteUsuario, updateUsuario, getUsuarioById} = require('../controllers/usuarioController');

//Obtiene todos los usuarios activos
router.get('/', getUsuarios);

//Obtiene un usuario por id
 router.get('/:id', getUsuarioById);

// Crear un usuario
router.post('/', createUsuario);

//Actualiza un usuario por id
router.put('/:id', updateUsuario);


//Borra un usuario por id
 router.delete('/:id', deleteUsuario);

module.exports = router;