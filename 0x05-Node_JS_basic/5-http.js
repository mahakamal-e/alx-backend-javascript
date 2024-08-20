const http = require('http');
const { readFile } = require('fs').promises;
const path = require('path');

// Reuse the logic from `3-read_file_async.js`
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        if (lines.length === 0) {
          throw new Error('Cannot load the database');
        }

        const [, ...rows] = lines;
        const fieldCounts = {};
        const fieldNames = {};

        rows.forEach((row) => {
          const [firstname, , , field] = row.split(',');

          // Skip empty lines and rows with missing data
          if (!firstname || !field) return;

          if (!fieldCounts[field]) {
            fieldCounts[field] = 0;
            fieldNames[field] = [];
          }

          fieldCounts[field] += 1; // Replaced ++ with += 1
          fieldNames[field].push(firstname);
        });

        const totalStudents = Object.values(fieldCounts).reduce((a, b) => a + b, 0);
        let output = `Number of students: ${totalStudents}\n`;

        for (const [field, count] of Object.entries(fieldCounts)) {
          const namesList = fieldNames[field].join(', ');
          output += `Number of students in ${field}: ${count}. List: ${namesList}\n`;
        }

        resolve(output.trim());
      })
      .catch(() => reject(new Error('Cannot load the database'))); // Removed the 'error' variable
  });
}

// Create the HTTP server
const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const filePath = path.join(__dirname, 'database.csv'); // Use the provided database.csv

    countStudents(filePath)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(1245);

// Export the server
module.exports = app;
