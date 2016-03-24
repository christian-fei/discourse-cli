function entrypoint(argv) {
  console.log( '-- argv', argv)
  var command = argv[0]
  if('help' === command) {
    return executeHelpCommand()
  }
}

function executeHelpCommand() {
  console.log( '-- help' )
}


module.exports = {
  entrypoint: entrypoint,
  executeHelpCommand: executeHelpCommand,
}
