const express = require('express');
// const cors = require('cors');

const app = express();
// app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1>Hello world from Express</h1>`);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

// docker buildx build --platform linux/amd64 -t pavitpim40/simple-express-api:1.0.0 --push .
