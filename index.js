const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src/public')));

app.listen(3002);

console.log('Server on port http://localhost:3002');