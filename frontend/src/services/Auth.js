import axios from './axios';

/**
 * @typedef {Object} AuthResponse
 * @property {string} token
 */

/**
 * Execute a login request
 * @param {Object} payload
 * @param {string} payload.username
 * @param {string} payload.password
 * @returns {Promise<AuthResponse>}
 */
async function login(payload) {
	const res = await axios.post('/auth/login', payload, {});
	return res.data;
}

/**
 * Execute a login request
 * @param {Object} payload
 * @param {string} payload.username
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<AuthResponse>}
 */
async function register(payload) {
	const res = await axios.post('/auth/register', payload, {});
	return res.data;
}

export const AuthService = {
	login,
	register,
};
