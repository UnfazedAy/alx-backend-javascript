const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      const students = data.trim().split('\n').map((row) => row.split(','));
      const fields = {};
      students.forEach((student) => {
        if (!fields[student.field]) fields[student.field] = [];
        fields[student.field].push(student.firstname);
      });

      resolve(fields);
    });
  });
}

module.exports = readDatabase;

readDatabase('/database.csv')
  .then((fields) => {
    console.log(fields);
  })
  .catch((err) => {
    console.error(err);
  });
