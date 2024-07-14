import http from 'http';
import app from './app';
import config from './config';
import db from './db';

async function init(): Promise<void> {
  const server = http.createServer(app);

  db.getSession(async (_connection, db, end) => {
    try {
      console.log('Pinging Database');
      await db.command({ ping: 1 });
      console.log('Connection To Database Successful');
    } finally {
      server.listen(config.PORT, () => {
        console.log(`Server Up And Running On Port :${config.PORT}`);
      });

      end();
    }
  });
}

init().catch(console.error);
