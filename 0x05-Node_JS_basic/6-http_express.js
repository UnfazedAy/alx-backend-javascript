const express = require('express');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  app.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
