const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Extract header and rows
    const [header, ...rows] = lines;

    // Initialize data structures
    const fieldCounts = {};
    const fieldNames = {};

    // Process each row
    rows.forEach((row) => {
      const [firstname, field] = row.split(',');

      // Skip empty lines
      if (!firstname || !field) return;

      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldNames[field] = [];
      }

      fieldCounts[field]++;
      fieldNames[field].push(firstname);
    });

    // Calculate total number of students
    const totalStudents = rows.length;

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log students count by field and list of names
    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${count}. List: ${fieldNames[field].join(', ')}`);
    }

  } catch (error) {
    // Handle errors (e.g., file not found)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
