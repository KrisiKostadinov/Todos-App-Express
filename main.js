const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;

app.engine('.hbs', exphbs());
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Serevr running on port: ${port}`));