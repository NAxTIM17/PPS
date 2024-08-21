import axios from './axios';
import { storeToken } from './utils';

/**
 * @typedef {Object} AuthResponse
 * @property {string} token
 */

/**
 * Execute a login request and stores token on local storage if found
 * @param {Object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<AuthResponse>}
 */
async function login(payload) {
	const res = await axios.post('/auth/login', payload, {});

	storeToken(res?.data?.token);

	return res.data;
}

/**
 * Execute a register request and stores token on local storage if found
 * @param {Object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<AuthResponse>}
 */
async function register(payload) {
	const res = await axios.post('/auth/register', payload, {});

	storeToken(res?.data?.token);

	return res.data;
}

/**
 * Execute a recover account request
 * @param {Object} payload
 * @param {string} payload.email
 * @returns {Promise<AuthResponse>}
 */
async function recoverAccount(payload) {
	const res = await axios.post('/auth/recover-account', payload, {});

	return res.data;
}

/**
 * Execute an update user password request
 * @param {Object} payload
 * @param {string} payload.newPassword
 * @param {string} payload.confirmPassword
 * @param {string} token
 * @returns {Promise<UserResponse>}
 */
async function newPassword(payload, token) {
	const res = await axios.post(
		'/auth/recover-account/new-password',
		payload,
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);

	return res.data?.user;
}

/**
 * Execute a get user request with a passed token
 * @param {string} token
 * @returns {Promise<UserResponse>}
 */
async function validateRecoverAccountSession(token) {
	const res = await axios.get('/auth/recover-account', {
		headers: { Authorization: `Bearer ${token}` },
	});

	return res.data?.user;
}

export const AuthService = {
	login,
	register,
	recoverAccount,
	newPassword,
	validateRecoverAccountSession,
};
