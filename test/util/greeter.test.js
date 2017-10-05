const Greeter = require('../../src/util/greeter');
const expect = require('@loopback/testlab').expect;

describe('greeter', () => {
  const greeter = new Greeter();
  function testGreeterFunctions(fn, name, expected) {
    it(`${fn} prints ${expected}`, () => {
      expect(greeter[fn](name)).to.equal(expected);
    });
  }
  // So many cases!
  testGreeterFunctions('morning', null, 'good morning, world');
  testGreeterFunctions('afternoon', null, 'good afternoon, world');
  testGreeterFunctions('evening', null, 'good evening, world');
  testGreeterFunctions('night', null, 'good night, world');

  testGreeterFunctions('morning', 'bob', 'good morning, bob');
  testGreeterFunctions('afternoon', 'bob', 'good afternoon, bob');
  testGreeterFunctions('evening', 'bob', 'good evening, bob');
  testGreeterFunctions('night', 'bob', 'good night, bob');

  it('greet prints hello, world', () => {
    expect(greeter.greet()).to.equal('hello world');
  });
  it('greet prints hello, bob', () => {
    expect(greeter.greet(null, 'bob')).to.equal('hello bob');
  });
});
