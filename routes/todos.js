const express = require('express');
const todosController = require('../controllers/todos');

const router = express.Router();

router.get('/add', todosController.get.add);
router.get('/', todosController.get.all);
router.get('/todos/details/:id', todosController.get.details);

router.post('/add', todosController.post.add);

module.exports = router;