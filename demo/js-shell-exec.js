#!/usr/bin/env node
/* eslint-disable */

const readline = require('readline');
const exec = require('child_process').exec;

// Create new readline interface
const shell = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '=> ',
});

// Prompt user
shell.prompt();

shell
  // Execute typed command through bash and write the result
  .on('line', (line) => {
    const command = exec(line, { shell: 'bash' }, (err) => {
      if (err) {
        console.log(err.toString());
        shell.prompt();
      }
    });
    command.stdout.on('data', data => console.log(data));
    command.stdout.on('close', () => shell.prompt());
  })
  // Close event
  .on('close', () => {
    console.log('Bye!');
    process.exit(0);
  })
  // `prompt` will automatically resume the stream
  // fg %js-shell
  .on('SIGCONT', () => {
    console.log('SIGCONT');
    shell.prompt();
  })
  // The input stream is was paused or receives the SIGCONT event
  .on('pause', () => {
    console.log('Readline paused.');
  })
  // Emitted whenever the input stream is resumed.
  .on('resume', () => {
    console.log('Readline resumed.');
  })
  // Attempt to close the shell using Ctrl-C
  .on('SIGINT', () => {
    console.log('SIGINT')
    shell.question('Are you sure you want to exit (yes/no)? ', (answer) => {
      if (answer.match(/^y(es)?$/i)) {
        return shell.pause();
      }
      shell.prompt();
    });
  });
