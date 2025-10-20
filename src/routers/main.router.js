const express = require('express');
const router = express.Router();

const controllers = require("../controllers/main.controllers")
router.get('/', controllers.index)

module.exports = router;
