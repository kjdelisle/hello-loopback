import { inject } from '@loopback/core';
import { get } from '@loopback/rest';

export class HitsController {
  @inject('hitCounter') hitCounter: any;

  @get('/hits')
  print() {
    return this.hitCounter.getHits();
  }
}
