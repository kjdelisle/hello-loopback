const App = require('../application');
const createHandler = require('@loopback/testlab').createClientForRestServer;
const expect = require('@loopback/testlab').expect;
const RestServer = require('@loopback/rest').RestServer;

describe('application', () => {
  let app;
  let client;
  before(createClient);
  after(stopServer);

  it('returns "hello world" for GET requests to /', async () => {
    const res = await client.get('/');
    expect(res.statusCode).to.eql(200);
    expect(res.text).to.eql('hello world');
  });

  async function createClient() {
    app = new App();
    const server = await app.getServer(RestServer);
    await app.start();
    client = await createHandler(server);
  }

  async function stopServer() {
    await app.stop();
  }
});
