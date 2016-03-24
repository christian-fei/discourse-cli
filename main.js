var entrypoint = require('./index')
var commands = require('./commands')

var argv = process.argv.slice(2)

entrypoint(argv, commands)
