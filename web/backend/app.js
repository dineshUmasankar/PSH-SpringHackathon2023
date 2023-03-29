const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port);

console.log(`Web server is ready to serve html files: ` + port);

app.use('/', express.static(path.join(__dirname, '../frontend/pages/index')));
app.use('/', express.static(path.join(__dirname, '../frontend/pages/landing')));