const { request, response } = require('express');
const Marca = require('../models/marca');

//busca todos las marcas
const getMarcas = async (req,res = response) => {
    try {
        const query = {estado:true};
        const marcaBD = await Marca.find(query);
        res.json(marcaBD);
    } catch (e) {
        return res.status(500).json({error: e});
    }

}
//buscar marca por su id
const getMarcaById = async (req = request, res = response) => {
     try {
         const {id} = req.params;
         const query = {estado:true, _id:id};
         const marcasBD = await Marca.findOne(query);
         res.json(marcasBD);
     } catch (e) {
         return res.status(500).json({error: e});
     }
}

//crear una marca
const createMarca = async (req = request, res = response) => {
    try {
        const nombre = req.body.nombre.toUpperCase();
        const marcaBD = await Marca.findOne({nombre});
        if(marcaBD){
            return res.status(400).json({msg: "ya existe la marca"});
        }
        const datos = {
            nombre
        }
        const marca = new Marca(datos, marcaBD);
        await marca.save();
        res.status(201).json(marca);
    } catch (e) {
        return res.status(500).json({error:e})
    }
}

const updateMarcaById = async (req = request, res = response) => {
     try {
        const { id } = req.params;
        const { nombre, ...data } = req.body;
        const marcaBD = await Marca.findOne({_id: id});
        if(!marcaBD){
            return res.status(404).json({msg: "La marca no existe"});
        }
        data.fechaCreacion = marcaBD.fechaCreacion;
        data.fechaActualizacion = new Date();
        const marca = await Marca.findByIdAndUpdate(id, data, {new : true});
        //res.status(201).json(estado);
        res.json({msg: "Marca actualizada"});
    } catch (e) {
        return res.status(500).json({error:e})
    }

}

const deleteMarcaById = async (req, res) => {
    const { id } = req.params;
    try {
        const marcaBD = await Marca.findById(id);
        if(!marcaBD){
            return res.status(404).json({msg: "La marca no existe"});
        }
        await Marca.findByIdAndDelete(id, {$set: {marca: false}});
        res.json({msg: "Marca eliminada"});
    } catch (e) {
        return res.status(500).json({error:e})
    }
}

module.exports = { getMarcas, getMarcaById, createMarca, updateMarcaById, deleteMarcaById}