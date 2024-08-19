const readline = require('readline');

// Create an interface for input and output streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial welcome message
console.log("Welcome to Holberton School, what is your name?");

// Handle input from the user
rl.question('', (input) => {
  // Display the user's input
  console.log(`Your name is: ${input}`);

  // Close the interface
  rl.close();

  // Display the closing message after closing the interface
  console.log("This important software is now closing");
});
