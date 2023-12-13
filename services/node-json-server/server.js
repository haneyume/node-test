const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(__dirname + '/db.json');

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log(new Date(), '🚀 Server ready!');
});
