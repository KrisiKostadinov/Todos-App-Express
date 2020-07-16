const Todo = require('../models/Todo');

module.exports = {
    get: {
        add(req, res) {
            res.render('todos/add');
        },

        async all(req, res) {
            const todos = await Todo.find();
            res.render('todos', { todos });
        },

        async details(req, res) {
            const todo = await Todo.findById(req.params.id);
            res.render('todos/details', { todo: todo });
        }
    },

    post: {
        async add(req, res) {
            const { text } = req.body;

            const todo = await Todo.create({
                text
            });

            res.redirect('/');
        },

        async del(req, res) {
            const id = req.params.id;

            const todo = await Todo.findByIdAndDelete(id);
            res.redirect('/');
        }
    }
}