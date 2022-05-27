const { request, response } = require('express');
const Estado = require('../models/estado');

//busca todos los estados activos
const getEstados = async (req,res = response) => {
    try {
        const query = {estado:true};
        const estadosBD = await Estado.find(query);
        res.json(estadosBD);
    } catch (e) {
        return res.status(500).json({error: e});
    }

}
//buscar estado por su id
const getEstadoById = async (req = request, res = response) => {
     try {
         const {id} = req.params;
         const query = {estado:true, _id:id};
         const estadosBD = await Estado.findOne(query);
         res.json(estadosBD);
     } catch (e) {
         return res.status(500).json({error: e});
     }
}

//crear estado
const createEstado = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre.toUpperCase();
        const estadoBD = await Estado.findOne({nombre});
        if(estadoBD){
            return res.status(400).json({msg: "ya existe el estado"});
        }
        const datos = {
            nombre
        }
        const estado = new Estado(datos, estadoBD);
        await estado.save();
        res.status(201).json(estado);
    } catch (e) {
        return res.status(500).json({error:e})
    }
}

const updateEstadoById = async (req = request, res = response) => {
     try {
        const { id } = req.params;
        const { nombre, ...data } = req.body;
        const estadoBD = await Estado.findOne({_id: id});
        if(!estadoBD){
            return res.status(404).json({msg: "el estado no existe"});
        }
        data.fechaCreacion = estadoBD.fechaCreacion;
        data.fechaActualizacion = new Date();
        const estado = await Estado.findByIdAndUpdate(id, data, {new : true});
        //res.status(201).json(estado);
        res.json({msg: "estado actualizado"});
    } catch (e) {
        return res.status(500).json({error:e})
    }

}

const deleteEstadoById = async (req, res) => {
    const { id } = req.params;
    try {
        const estadoBD = await Estado.findById(id);
        if(!estadoBD){
            return res.status(404).json({msg: "el estado no existe"});
        }
        await Estado.findByIdAndDelete(id, {$set: {estado: false}});
        res.json({msg: "estado eliminado"});
    } catch (e) {
        return res.status(500).json({error:e})
    }
}

module.exports = { getEstados, getEstadoById, createEstado, updateEstadoById, deleteEstadoById}