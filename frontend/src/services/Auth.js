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

async function updatePassword(payload) {
	const res = await axios.patch('/recover/password', payload, {});

	storeToken(res?.data?.token);

	return res.data;
}

export const AuthService = {
	login,
	register,
	updatePassword,
};
