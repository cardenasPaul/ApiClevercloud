const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./DBConector');
const app = express();
//configuraciones
app.set('port',process.env.PORT || 3000)//se abrira el servidor en el puerto envevido o en el puerto 3000
//middlewares o funciones de ejecucion antes de entrar a una ruta de navegacion
app.use(morgan("dev_start"));
app.use(express.json())//valido si recibo un archivo json fue enviado
//rutas de navegacion
app.use('/api/users/', require('./routes/User.routes'));//importo el router con las rutas
app.use('/api/Local/', require('./routes/Local.routes'));//importo el router con las rutas
//rutas estaticas a archivos
app.use(express.static(path.join(__dirname, 'client')));//uso para la ruta raiz del sevidor el html del cliente
app.get('/nuevo/',function(req, res){
    res.sendFile(path.join(__dirname,'/client/nuevoLocal.html'))
});//uso para la ruta raiz del sevidor el html del cliente
//start server
app.listen(app.get('port'), () => {
    console.log("Servidor en linea dentro del puerto " + app.get('port'))
});
