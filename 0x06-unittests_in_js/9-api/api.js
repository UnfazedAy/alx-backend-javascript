const express = require('express');

const port = 7865;
const hostname = '127.0.0.1';
const app = express();

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, hostname, () => {
  console.log('API available on localhost port 7865');
});
