import dotenv from 'dotenv';
import path from 'path';

const PATH_TO_ENV_FILE = path.join(__dirname, '..', '..', '.env');
const env = dotenv.config({ path: PATH_TO_ENV_FILE }).parsed;

export default {
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
	CLIENT_BASE_PATH: env?.CLIENT_BASE_PATH ?? 'http://localhost:5173',
	CLIENT_RECOVER_ACCOUNT_NEW_PASSWORD_PATH:
		env?.CLIENT_RECOVER_ACCOUNT_NEW_PASSWORD_PATH,
	NODEMAILER_RECOVER_ACCOUNT_EMAIL_SUBJECT:
		env?.NODEMAILER_RECOVER_ACCOUNT_EMAIL_SUBJECT ?? 'Recuperar Cuenta',
} as const;
