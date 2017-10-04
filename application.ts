import { Application } from '@loopback/core';
import { RestComponent, RestServer } from '@loopback/rest';
import { FooController } from './src/controllers/foo.controller';
import { BarController } from './src/controllers/bar.controller';
import { HitCounter } from './src/util/hit-counter';
import { HitsController } from './src/controllers/hits.controller';
import { BindingScope } from '@loopback/context';

export class HelloWorldApp extends Application {
  hitCount: number;
  constructor() {
    super({
      components: [RestComponent]
    });
    const app = this;
    this.hitCount = 0;
    app.controller(FooController);
    app.controller(BarController);
    app.controller(HitsController);
    app
      .bind('hitCounter')
      .toClass(HitCounter)
      .inScope(BindingScope.SINGLETON);
  }

  async start() {
    const rest = await this.getServer(RestServer);
    await super.start();
    console.log(`REST server running on port: ${await rest.get('rest.port')}`);
  }
}
