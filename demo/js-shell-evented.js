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
    console.log('Bye!');
    process.exit(0);
  })
  // `prompt` will automatically resume the stream after `fg %js-shell`
  .on('SIGCONT', () => {
    console.log('SIGCONT');
    shell.prompt();
  })
  // The input stream is was paused or receives the SIGCONT event
  .on('pause', () => {
    console.log('Readline is paused.');
  })
  // Emitted whenever the input stream is resumed.
  .on('resume', () => {
    console.log('Readline is resumed.');
  })
  //
  .on('SIGINT', () => {
    console.log('SIGINT')
    shell.question('Are you sure you want to exit? ', (answer) => {
      if (answer.match(/^y(es)?$/i)) {
        process.exit(0);
      }
      shell.prompt();
    });
  });
