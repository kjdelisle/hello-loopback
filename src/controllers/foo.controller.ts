import { inject } from '@loopback/core';
import { get } from '@loopback/rest';
export class FooController {
  @inject('hitCounter') hitCounter: any;

  @get('/foo')
  print() {
    this.hitCounter.addHit();
    return 'Hello Foo';
  }
}
