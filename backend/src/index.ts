import app from './app';
import http from 'http';
import config from './config';

const server = http.createServer(app());

server.listen(config.PORT, () => {
  console.log(`Server Up And Running On Port :${config.PORT}`);
});
