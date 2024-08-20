import app from './app';
import http from 'http';
import env from './config/env';

const server = http.createServer(app());

server.listen(env.PORT, () => {
	console.log(`Server Up And Running On Port :${env.PORT}`);
});
