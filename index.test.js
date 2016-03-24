var expect = require('chai').expect
var sinon = require('sinon')

var noop = function() {}

var commands = {
  help: noop,
}

describe('discourse-cli', function () {
  var cli = require('.')

  describe('when no token is provided, throw error', function () {
  })

  it('can execute help command if no token is provided', function () {
    var argv = ['help']
    var spy = sinon.spy(commands, 'help')

    cli(argv, commands)

    expect( spy.called ).to.be.true
  })
})
