const { Router } = require('express');

const { getTiposEquipo, getTiposEquipoUserActivo, createTipoEquipo, getTiposEquipoById, updateTipoEquipoById, deleteTipoEquipoByID } = require('../controllers/tipoEquipoController');

const router = Router();

//obtener tipos de equipo por usuario activo
router.get('/user-activo', getTiposEquipoUserActivo);

//obtener tipos de equipos
router.get('/', getTiposEquipo);


 //Obtiene un tipo de equipos por id
 router.get('/:id', getTiposEquipoById);

// Crear un tipo de equipos
router.post('/', createTipoEquipo);

// Actualiza un tipo de equipos por id
router.put('/:id', updateTipoEquipoById);

//Actualiza una parte del tipo de equipos
router.patch('/:id', (req, res) => {
    res.json({});
});

// Borra un tipo de equipos por id
 router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;