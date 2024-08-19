// Display the initial welcome message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Handle input from the user
process.stdin.once('data', (input) => {
  // Convert Buffer to string and trim any extra newlines
  const name = input.toString().trim();
  
  // Display the user's input
  process.stdout.write(`Your name is: ${name}\n`);
  
  // Display the closing message and end the process
  process.stdout.write("This important software is now closing\n");
  
  // End the input stream
  process.stdin.end();
});
