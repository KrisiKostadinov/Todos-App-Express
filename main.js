const express = require('express');
const exphbs = require('express-handlebars');
const todosRouter = require('./routes/todos');

const app = express();

const port = process.env.PORT || 3000;

app.engine('.hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('todos');
});
app.use('/todos', todosRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));