const Todo = require('../models/Todo');

module.exports = {
    get: {
        add(req, res) {
            res.render('todos/add');
        },

        async all(req, res) {
            const todos = await Todo.find();
            res.render('todos', { todos });
        }
    },

    post: {
        async add(req, res) {
            const { text } = req.body;

            const todo = await Todo.create({
                text
            });

            res.redirect('/');
        }
    }
}