const express = require('express');
const router = express.Router();

const contollers = require('../controllers/productos.controllers');
router.get('/', contollers.productos);

router.get('/:id', contollers.producto_id);

module.exports = router;