const mongoose = require('mongoose');
const {Schema} = mongoose;

/*
El objeto de pruebas que voy a implmentar es un usuario simple
con contraseña,nombre de usuario, fecha del registro, nacimiento, ip de registro, genero y email
lo que se podria interpretar como caracteristicas de una entidad que por medio del required se define si son publicas o internas
*/
const schemaUser = new Schema({
    Direccion:{type: String, required:true},
    Telefono:{type: String, required:false},
    Rubro:{type: String, required:true}
})

module.exports = mongoose.model('Local', schemaUser);