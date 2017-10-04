export class HitCounter {
  private hitCount: number;
  constructor() {
    this.hitCount = 0;
  }

  addHit() {
    this.hitCount++;
  }

  getHits() {
    return this.hitCount.toString();
  }
}
