#!/usr/bin/env node

var program = require('commander');
var cli = require('../lib/cli');

program.command('create')
  .description(' - create an application')
  .action(function() {
    cli.create(program.args.shift(), process.cwd());
  });

program.parse(process.argv);