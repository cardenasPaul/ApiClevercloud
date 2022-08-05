const mongoose = require('mongoose');
const {Schema} = mongoose;

/*
El objeto de pruebas que voy a implmentar es un usuario simple
con contraseña,nombre de usuario, fecha del registro, nacimiento, ip de registro, genero y email
lo que se podria interpretar como caracteristicas de una entidad que por medio del required se define si son publicas o internas
*/
const schemaUser = new Schema({
    username:{type: String, required:true},
    password:{type: String, required:true},
    email:{type: String, required:true},
    registerDate:{type: Date, required:true},
    birthday:{type: Date, required:true},
    ipRegister:{type: String, required:true},
    gender:{type: String, required:true}
})

module.exports = mongoose.model('User', schemaUser);