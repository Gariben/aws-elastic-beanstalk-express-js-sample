const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Ness Mains are awful people irl'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
