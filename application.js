const Application = require('@loopback/core').Application;
const RestComponent = require('@loopback/rest').RestComponent;
const RestServer = require('@loopback/rest').RestServer;

class HelloWorldApp extends Application {
  constructor() {
    super({
      components: [RestComponent]
    });
  }

  async start() {
    const server = await this.getServer(RestServer);
    server.handler((sequence, request, response) => {
      sequence.send(response, 'Hello World!');
    });
    await super.start();
    console.log(`REST server running on port ${await server.get('rest.port')}`);
  }
}

module.exports = HelloWorldApp;
