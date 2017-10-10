import { Application } from '@loopback/core';
import { RestComponent, RestServer } from '@loopback/rest';

export class HelloWorldApp extends Application {
  constructor() {
    super({
      components: [RestComponent]
    });
  }

  async start() {
    const rest = await this.getServer(RestServer);
    rest.handler((sequence, request, response) => {
      sequence.send(response, 'Hello World!');
    });
    await super.start();
    console.log(`REST server running on port: ${await rest.get('rest.port')}`);
  }
}
