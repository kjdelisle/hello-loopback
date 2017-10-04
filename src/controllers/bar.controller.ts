import { inject } from '@loopback/core';
import { get } from '@loopback/rest';

export class BarController {
  @inject('hitCounter') hitCounter: any;

  @get('/bar')
  print() {
    this.hitCounter.addHit();
    return 'Hello Bar';
  }
}
