const http = require('http');
const fs = require('fs');
const path = require('path');

// Reuse the logic from `3-read_file_async.js`
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
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

        fieldCounts[field] += 1;
        fieldNames[field].push(firstname);
      });

      const totalStudents = Object.values(fieldCounts).reduce((a, b) => a + b, 0);
      let output = `Number of students: ${totalStudents}\n`;

      for (const [field, count] of Object.entries(fieldCounts)) {
        const namesList = fieldNames[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${namesList}\n`;
      }

      resolve(output.trim());
    });
  });
}

// Function to send HTTP response
const sendResponse = (res, data) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(data);
};

// Create the HTTP server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';
    sendResponse(res, responseText);
  } else if (req.url === '/students') {
    const filePath = path.join(__dirname, 'database.csv'); // Path to the database file
    countStudents(filePath)
      .then((output) => {
        const responseText = `This is the list of our students\n${output}`;
        sendResponse(res, responseText);
      })
      .catch((error) => {
        const responseText = `This is the list of our students\n${error.message}`;
        sendResponse(res, responseText);
      });
  } else {
    sendResponse(res, 'Not Found');
  }
});

// Listen on port 1245
app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the server
module.exports = app;
