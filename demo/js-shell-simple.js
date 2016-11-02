#!/usr/bin/env node
/* eslint-disable */

const readline = require('readline');

// Create new readline interface
const shell = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '=> ',
});

// Prompt user
shell.prompt();

shell
  // Just write typed command to stdin
  // and prompt user again
  .on('line', (line) => {
    console.log(line);
    shell.prompt();
  })
  // Close event
  .on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
  });
