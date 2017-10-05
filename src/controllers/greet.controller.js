'use strict';

const get = require('@loopback/rest').get;
const Greeter = require('../util/greeter');

class GreetController {
  constructor() {
    this.greeter = new Greeter();
  }

  async greet(timeOfDay, name) {
    switch (timeOfDay) {
      case 'morning':
        return this.greeter.morning(name);
      case 'afternoon':
        return this.greeter.afternoon(name);
      case 'evening':
        return this.greeter.evening(name);
      case 'night':
        return this.greeter.night(name);
      default:
        return this.greeter.greet(null, name);
    }
  }
}
module.exports = GreetController;
