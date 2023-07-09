const express = require('express');
// const cors = require('cors');

const app = express();
// app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1>Hello world</h1>`);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
