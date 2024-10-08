const Usuario = require('../models/usuario');
const Mensaje = require('../models/mensaje');

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

const grabarMensaje = async( payload ) => {

    /*
        de: '',
        para: '',
        mensaje: ''
    */

    try {
        const mensaje = new Mensaje( payload );
        await mensaje.save();
        return true;
    } catch (error) {
        return false;
    }
}


module.exports = {
    usuarioConectado,
    usuarioDesconectado,
    grabarMensaje
}