const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Extract header and rows
    const [header, ...rows] = lines;

    // Initialize data structures
    const fieldCounts = {};
    const fieldNames = {};

    // Process each row
    rows.forEach((row) => {
      const [firstname, , , field] = row.split(',');

      // Skip empty lines and rows with missing data
      if (!firstname || !field) return;

      // Check if the field is already in fieldCounts
      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldNames[field] = [];
      }

      // Increment the count and add the name
      fieldCounts[field]++;
      fieldNames[field].push(firstname);
    });

    // Calculate total number of students
    const totalStudents = rows.length;

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log students count by field and list of names
    for (const [field, count] of Object.entries(fieldCounts)) {
      const namesList = fieldNames[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${namesList}`);
    }

  } catch (error) {
    // Handle errors (e.g., file not found)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
