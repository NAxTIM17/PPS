import dotenv from 'dotenv';
import path from 'path';

const PATH_TO_ENV_FILE = path.join(__dirname, '..', '..', '.env');
const env = dotenv.config({ path: PATH_TO_ENV_FILE }).parsed;

export default {
	CLIENT_PATH: env?.CLIENT_PATH ?? 'http://localhost:5173',
	API_PREFIX: env?.API_PREFIX ?? '/api',
	MONGODB_URI: env?.MONGODB_URI ?? '',
	MONGODB_DB_NAME: env?.MONGODB_DB_NAME ?? 'test',
	PORT: Number(env?.PORT) || 4000,
	JWT_SECRET_KEY: env?.JWT_SECRET_KEY ?? '',
	IS_PROD: env?.NODE_ENV === 'production',
	ENV: env?.NODE_ENV === 'production' ? 'production' : 'development',
	NODEMAILER: {
		USER: env?.NODEMAILER_USER,
		PASS: env?.NODEMAILER_PASS,
	},
} as const;
