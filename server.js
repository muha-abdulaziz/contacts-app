/** */

const http = require('http');
const app = require('./app');

// Server
const server = http.createServer(app);

// Port
const port = process.env.PORT || '3000';

// Listen
server.listen(port);

// onError
server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// onListening
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  // [TODO] use logger instead
  console.log(`Listening on ${bind}`);
});
