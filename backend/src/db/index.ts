import mongoose, { ConnectOptions } from 'mongoose';
import env from '../config/env';

async function connectDB(): Promise<void> {
	try {
		await mongoose.connect(env.MONGODB_URI, {
			dbName: env.MONGODB_DB_NAME,
		} as ConnectOptions);
	} catch (e) {
		const error = (e as { message?: string })?.message ?? '';
		throw new Error(
			`Error While Attempting Connection To Database: ${error}`
		);
	}
}

export default {
	connectDB,
};
