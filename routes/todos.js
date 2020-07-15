const express = require('express');
const todosController = require('../controllers/todos');

const router = express.Router();

router.get('/add', todosController.get.add);

module.exports = router;