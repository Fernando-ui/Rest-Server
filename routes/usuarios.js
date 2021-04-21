const { Router } = require('express');
const { usuariosGet,
        usuariosPost,
        usuarioPut,
        usuarioDelete,
        usuarioPatch } = require('../controllers/usuarios');
        
const router = Router();

router.get('/',usuariosGet);
router.post('/',  usuariosPost);
router.put('/', usuarioPut);
router.patch('/', usuarioPatch)
router.delete('/', usuarioDelete );













module.exports = router;