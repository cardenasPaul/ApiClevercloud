const express = require('express');
const router = express.Router();//importo el router de express
const localModel = require('../models/Local');

/*
res = response se encarga de enviar una respuesta al cliente
req = request se encarga de recibir informacion en la cabecera desde el cliente
*/

// sin datos en header
router.get('/', async (req,res) =>{
    const Local = await localModel.find();
    res.json(Local);
})
//con valores json en el header
router.post('/', async (req,res) =>{
    const{
        Direccion,
        Telefono,
        Rubro,
        IdNegocio,
        Nombre,
        Duenio,
        Localidad
    } = req.body;
    const Local = new localModel({
        Direccion,
        Telefono,
        Rubro,
        IdNegocio,
        Nombre,
        Duenio,
        Localidad
    });
    
    await Local.save();
    res.json({status:"guardado"});
})
//busqueda por id
router.get('/:id', async (req,res) =>{
    var _id = req.params.id
    const Local = await localModel.findOne({ 'IdNegocio':_id});
    res.json(Local);
})
//borrado de datos
router.delete('/borrar/:id', async(req, res) =>{
    var _id = req.params.id
    await  localModel.remove({'IdNegocio':_id});
    res.json({status:"borrado"});
})

module.exports = router;