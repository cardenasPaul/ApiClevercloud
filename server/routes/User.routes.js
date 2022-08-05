const express = require('express');
const router = express.Router();//importo el router de express
const userModel = require('../models/User');

/*
res = response se encarga de enviar una respuesta al cliente
req = request se encarga de recibir informacion en la cabecera desde el cliente
*/

// sin datos en header
router.get('/', async (req,res) =>{
    const users = await userModel.find();
    res.json(users);
})
//con valores json en el header
router.post('/', async (req,res) =>{
    const{
        username,
        password,
        email,
        registerDate,
        birthday,
        ipRegister,
        gender
    } = req.body;
    const user = new userModel({
        username,
        password,
        email,
        registerDate,
        birthday,
        ipRegister,
        gender
    });
    await user.save();
    res.json({status:"saved"});
})
//update de datos del usuario
router.put('/:id', async (req,res) =>{
    const{
        username,
        password,
        email,
        registerDate,
        birthday,
        ipRegister,
        gender
    } = req.body;
    const user = new userModel({
        username,
        password,
        email,
        registerDate,
        birthday,
        ipRegister,
        gender
    });
    await userModel.findByIdAndUpdate(req.params.id, user);
    res.json({status:'updated user'})
})
router.delete('/:id', async (req,res) =>{
    await userModel.findByIdAndRemove(req.params.id);
    res.json({status:'deleted user'})
})
//busqueda por id
router.get('/:id', async (req,res) =>{
    const user = await userModel.findById(req.params.id);
    res.json(user);
})

module.exports = router;