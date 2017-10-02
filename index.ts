import { HelloWorldApp } from './application';

(async function main() {
  const app = new HelloWorldApp();
  await app.start();

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  async function shutdown() {
    console.log(''); // To move the message one line below the ^C char!
    console.log('Stopping application...');
    await app.stop();
    console.log('Exited.');
  }
})();
