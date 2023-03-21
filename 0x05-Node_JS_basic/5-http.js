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
  }
});

app.on('request', (req, res) => {
  if (req.url === '/students') {
    res.setHeader('ContentType', 'text/plain');
    res.write('This is the list of our students\n');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];
    countStudents(filePath)
  }
});

module.exports = app;
