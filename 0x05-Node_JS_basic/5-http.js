const fs = require('fs');
const http = require('http');
const countStudents = require('./3-read_file_async');

const { argv } = process;
const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = argv[2];
    countStudents(filePath)
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

app.listen(port, hostname);

module.exports = app;
