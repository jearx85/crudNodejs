const { request, response } = require('express');

const Usuario = require('../models/usuario');

//Consultar todos los usuarios activos
 const getUsuarios = async (req, res = response) => {
    try{
        const query = { estado: true};
        const usuariosBD = await Usuario.find(query);
        res.json(usuariosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//Obtener usuario por id
const getUsuarioById = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const usuarioBD = await Usuario.findById(id);
        res.json(usuarioBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

//crear usaurios
const createUsuario = async (req = request, res = response) => {
    try{
        const body = req.body;
        const usuario = new Usuario( body )
        await usuario.save();
        res.json({msg:'Usuario creado'});
    }catch(e){
        return res.status(500).json({error: e});
    }
}

const deleteUsuario = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndDelete(id, {estado: false});
        res.json({
            mensaje: 'Usuario eliminado',
            usuario
        });
    }catch(e){
        return res.status(500).json({error: e});
    }
}

const updateUsuario = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const usuario = await Usuario.findByIdAndUpdate(id, body, {new: true});
        res.json({
            mensaje: 'Usuario actualizado',
            usuario
        });
    }catch(e){
        return res.status(500).json({error: e});
    }
}



module.exports = { getUsuarios, createUsuario,deleteUsuario, updateUsuario, getUsuarioById };