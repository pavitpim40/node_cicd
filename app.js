const express = require('express');
const cors = require('cors');
// const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    // add(1, 2);
    res.send(`<h1>Hello world from Express with CICD</h1>`);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

// docker buildx build --platform linux/amd64 -t pavitpim40/simple-express-api:1.0.0 --push .
