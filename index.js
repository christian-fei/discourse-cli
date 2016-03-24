module.exports = function entrypoint(argv, commands) {
  var command = argv[0]
  if('help' === command) {
    return commands.help()
  }
}

