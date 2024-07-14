import { Db, MongoClient } from 'mongodb';
import config from '../config';

const client = new MongoClient(config.MONGODB_URI);

type Session = {
  connection: MongoClient;
  db: Db;
};

async function getSession(callback?: (connection: MongoClient, db: Db, end: () => void) => void): Promise<Session | undefined> {
  let connection: MongoClient | undefined;
  let db: Db | undefined;

  try {
    connection = await client.connect();
    db = connection.db();
  } catch (e) {
    throw new Error(`Failed Connecting To Database: ${e}`);
  }

  callback?.(connection, db, () => {
    connection.close();
  });

  return { connection, db };
}

export default {
  getSession,
}
