const HelloWorldApp = require('./application');

(async function main() {
  const app = new HelloWorldApp();
  await app.start();
})();
