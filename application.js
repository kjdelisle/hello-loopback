const Application = require('@loopback/core').Application;
const RestComponent = require('@loopback/rest').RestComponent;
const RestServer = require('@loopback/rest').RestServer;
const GreetController = require('./src/controllers/greet.controller');

class HelloWorldApp extends Application {
  constructor() {
    super({
      components: [RestComponent]
    });
    this.controller(GreetController);
  }

  async start() {
    const server = await this.getServer(RestServer);
    server.api(require('./src/apidef/swagger.json'));
    await super.start();
  }
}

module.exports = HelloWorldApp;
