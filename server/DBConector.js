const mongoose = require('mongoose');
const connectDirection = 'mongodb://ujc99rv5h3q5r7mvj6zp:O1ngTdhWlS0ziW1QQsGU@bnlmb5vzt3eaeex-mongodb.services.clever-cloud.com:27017/bnlmb5vzt3eaeex';
//en este caso hice una base de datos en clevercloud de tipo mongobd y  saque la coneccion URI

mongoose.connect(connectDirection).then(db =>
    console.log('La coneccion con la base de datos fue exitosa.')
).catch(
    err => console.error(err)
)
module.exports = mongoose;