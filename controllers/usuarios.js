const { response } = require('express');

const usuariosGet =  (req, res = response) => {

    res.json({
        msg:'get API - Controlador'
    });

};
const usuariosPost =  (req, res = response) => {

    res.json({
        msg:'post API- Controlador',
    });
};


const usuarioPatch = (req,  res = response) => {

    res.json({
        msg:'patch API- Controlador',
    });

};

const usuarioPut = (req, res = response) => {

    res.json({
        msg:'put API- Controlador',
    });

};

const usuarioDelete = (req, res = response) => {

    res.json({
        msg:'Delete API- Controlador'
    });
    
};

module.exports = {

    usuariosGet,
    usuariosPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}