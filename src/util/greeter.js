class Greeter {
  constructor() {}
  morning(name) {
    return this.greet('good morning', name);
  }

  afternoon(name) {
    return this.greet('good afternoon', name);
  }

  evening(name) {
    return this.greet('good evening', name);
  }

  night(name) {
    return this.greet('good night', name);
  }

  greet(prefix, name) {
    return `${prefix ? prefix + ',' : 'hello'} ${name || 'world'}`;
  }
}

module.exports = Greeter;
