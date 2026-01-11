import http from 'http';
import app from './exp/app';
import debug from 'debug';

const debugLog = debug('mean-server');

const normalizePort = (val: string | undefined) => {
  var port = val ? parseInt(val, 10) : 0;

  if (isNaN(port))
    // named pipe
    return val;

  if (port >= 0)
    // port number
    return port;

  return false;
};

const port = normalizePort(process.env.PORT || '4201');

app.set('port', port);

const onError = (error: any) => {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  debugLog('Listening on ' + bind);
};
// app.listen(port);
// const server = http.createServer((req, res) => {
//   console.log(`Received request for ${req.url}`);
//   res.end('Hello, World!!');
// });

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
