const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');

const todosRouter = require('./routes/todos');

require('./config/db');

const app = express();

const port = process.env.PORT || 3000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', todosRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));