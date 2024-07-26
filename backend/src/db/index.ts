import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config';

async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(config.MONGODB_URI, {} as ConnectOptions);
  } catch (e) {
    const error = (e as { message?: string })?.message ?? '';
    throw new Error(`Error While Attempting Connection To Database: ${error}`);
  }
};

export default {
  connectDB,
};
