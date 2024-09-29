const Usuario = require('../models/usuario');


const usuarioConectado = async ( uid = '' ) => {
    
    const usuario = await Usuario.findById( uid );
    usuario.online = true;

    // Guardar en DB
    await usuario.save();

    return usuario;
}

const usuarioDesconectado = async ( uid = '' ) => {

    const usuario = await Usuario.findById( uid );
    usuario.online = false;

    // Guardar en DB
    await usuario.save();

    return usuario;
}


module.exports = {
    usuarioConectado,
    usuarioDesconectado
}