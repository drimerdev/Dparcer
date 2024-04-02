// MeowJS reparcer
// By Miguel V. Mesquita/ Drimerdev


function _reparce() {
    // reparce languages
    const _reparce = require("./bin/cli") 
}

function _cli() {
    const { Command } = require("commander");
    const program = new Command();

    program
    .name('dparcer')
    .description('Code in multiple languages only using JavaScript')
    .version('0.0.1')
    .option('--test');

    program.command('run')
    .action(function() {
        // something here
    }) 
}