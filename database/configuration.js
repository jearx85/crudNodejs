const mongoose = require('mongoose');

const mongoConnection =async () => {
    try {
       await mongoose.connect( process.env.MONGO_URI,{
           useNewUrlparser: true,
           useUnifiedTopology: true
       });
       console.log('Conexion a mongo exitosa');
    }catch(e){
        console.log('Error de conexion a mongo', e);
        throw new Error('Error de conexion');
    }
}

module.exports = { mongoConnection }