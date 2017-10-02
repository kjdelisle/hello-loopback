import {Application} from '@loopback/core';
import {RestComponent, RestServer} from '@loopback/rest';
 
const app = new Application({
  components: [
    RestComponent,
  ]
});

(async function start() {
  const rest = await app.getServer(RestServer);
  rest.handler((sequence, request, response) => {
    sequence.send(response, 'hello world');
  });
  await app.start();
  console.log(`REST server running on port: ${rest.getSync('rest.port')}`);
})();