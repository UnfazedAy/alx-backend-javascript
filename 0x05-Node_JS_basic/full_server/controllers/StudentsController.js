const readDatabase = require('../utils');

const filePath = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    const output = [];
    request.status(200);
    output.push('This is the list of our students');
    readDatabase(filePath)
      .then((data) => {
        console.log(data);
      });
  }
}

module.exports = StudentsController;

const testing = StudentsController.getAllStudents;
testing();
