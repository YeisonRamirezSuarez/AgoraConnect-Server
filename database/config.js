const mongoose = require('mongoose');


const dbConnection = async() => {
    try{

        mongoose.connect(process.env.DB_CNN);

        console.log('DB Online');

    } catch(error){
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el administrador');
    }
}

module.exports = {
    dbConnection
}