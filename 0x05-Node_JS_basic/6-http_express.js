const express = require('express');

// Create an Express app
const app = express();

// Define the root route to display "Hello Holberton School!"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app
module.exports = app;
