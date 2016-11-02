#!/usr/bin/env node
/* eslint-disable */
const Vorpal = require('vorpal');

const shell = Vorpal();

shell
  .command('say [words...]')
  .action(function (args, cb) {
    this.log(args.words.join(' '));
    cb();
  });

shell
  .command('upper [words...]')
  .action(function (args, cb) {
    const [text] = args.stdin;
    this.log(text.toUpperCase());
    cb();
  });

shell
  .command('color [color] [text...]')
  .action(function (args, cb) {
    this.log(shell.chalk[args.color](args.stdin));
    cb();
  });

shell
  .delimiter('vorpal$')
  .show();
