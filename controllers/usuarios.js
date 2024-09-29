const { response } = require("express");
const Usuario = require('../models/usuario');
const usuario = require("../models/usuario");

const getUsuarios = async( req, res = response ) => {
    
    const desde = Number( req.query.desde ) || 0;

    const usuario = await Usuario
        .find({ _id: { $ne: req.uid } })
        .sort('-online')
        .skip( desde )
        .limit( 20 );

    res.json({
        ok: true,
        usuario,
    });
}


module.exports = {
    getUsuarios
}