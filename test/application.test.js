const App = require('../application');
const createHandler = require('@loopback/testlab').createClientForRestServer;
const expect = require('@loopback/testlab').expect;
const RestServer = require('@loopback/rest').RestServer;

describe('application', () => {
  let app;
  let client;
  before(createClient);
  after(stopServer);

  it('returns "hello world" for GET requests to /greet', async () => {
    const res = await client.get('/greet');
    expect(res.statusCode).to.eql(200);
    expect(res.text).to.eql('hello world');
  });

  it('returns "hello bob" for GET requests to /greet?name=bob', async () => {
    const res = await client.get('/greet?name=bob');
    expect(res.statusCode).to.eql(200);
    expect(res.text).to.eql('hello bob');
  });

  it('returns "good morning, world" for GET requests to /greet?timeOfDay=morning', async () => {
    const res = await client.get('/greet?timeOfDay=morning');
    expect(res.statusCode).to.eql(200);
    expect(res.text).to.eql('good morning, world');
  });

  it('returns "good morning, bob" for GET requests to /greet?timeOfDay=morning&name=bob', async () => {
    const res = await client.get('/greet?timeOfDay=morning&name=bob');
    expect(res.statusCode).to.eql(200);
    expect(res.text).to.eql('good morning, bob');
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
