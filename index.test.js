var expect = require('chai').expect
var sinon = require('sinon')

describe('discourse-cli', function () {
  var cli = require('.')

  describe('cannot execute command if no token is provided', function () {
  })

  it('can execute help command if no token is provided', function () {
    var argv = ['help']

    var spy = sinon.spy(cli.executeHelpCommand)

    cli.entrypoint(argv)

    expect( spy.called ).to.be.true
  })
})
