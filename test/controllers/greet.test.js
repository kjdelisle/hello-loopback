const GreetController = require('../../src/controllers/greet.controller');
const expect = require('@loopback/testlab').expect;

describe('greet-controller', () => {
  describe('greet', () => {
    const ctrl = new GreetController();
    function greetTest(test, timeOfDay, name, expected) {
      it(`${test} should return ${expected}`, async () => {
        expect(await ctrl.greet(timeOfDay, name)).to.equal(expected);
      });
    }

    greetTest('no params', null, null, 'hello world');
    greetTest('name "bob"', null, 'bob', 'hello bob');

    greetTest('timeOfDay "morning"', 'morning', null, 'good morning, world');
    greetTest('timeOfDay "afternoon"', 'afternoon', null, 'good afternoon, world');
    greetTest('timeOfDay "evening"', 'evening', null, 'good evening, world');
    greetTest('timeOfDay "night"', 'night', null, 'good night, world');

    greetTest('timeOfDay "morning"', 'morning', 'bob', 'good morning, bob');
    greetTest('timeOfDay "afternoon"', 'afternoon', 'bob', 'good afternoon, bob');
    greetTest('timeOfDay "evening"', 'evening', 'bob', 'good evening, bob');
    greetTest('timeOfDay "night"', 'night', 'bob', 'good night, bob');
  });
});
