import { HelloWorldApp } from './application';

(async function main() {
  const app = new HelloWorldApp();
  await app.start();
})();
