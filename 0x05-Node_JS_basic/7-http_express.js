const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

const organizeStudentsByField = (rows) => {
  const headers = rows[0].split(',');
  const fieldIndex = headers.indexOf('field');
  const firstNameIndex = headers.indexOf('firstname');

  const studentsGroupedByField = {};
  let totalStudents = 0;

  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    if (row !== '') {
      totalStudents += 1;
      const studentData = row.split(',');
      const fieldName = studentData[fieldIndex];
      if (!studentsGroupedByField[fieldName]) {
        studentsGroupedByField[fieldName] = [];
      }
      studentsGroupedByField[fieldName].push(studentData[firstNameIndex]);
    }
  }

  return { studentsGroupedByField, totalStudents };
};

const formatStudentsOutput = (studentsGroupedByField) => {
  let output = '';
  const fields = Object.keys(studentsGroupedByField);
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    const studentNames = studentsGroupedByField[field];
    const numberOfStudents = studentNames.length;
    const namesList = studentNames.join(', ');
    output += `Number of students in ${field}: ${numberOfStudents}. List: ${namesList}`;
    if (i < fields.length - 1) output += '\n';
  }

  return output;
};

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const rows = data.split('\n');
    const { studentsGroupedByField, totalStudents } = organizeStudentsByField(rows);

    let result = `Number of students: ${totalStudents}\n`;
    result += formatStudentsOutput(studentsGroupedByField);
    resolve(result);
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then((data) => {
      const responseText = `This is the list of our students\n${data}`;
      res.send(responseText);
    }).catch((error) => {
      const responseText = `This is the list of our students\n${error.message}`;
      res.send(responseText);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
