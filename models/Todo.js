const { mongoose, Schema, model } = require('mongoose');

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
    }
});

const Todo = model('Todo', TodoSchema);

module.exports = Todo;