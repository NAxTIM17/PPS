import axios from './axios';

/**
 * @typedef {Object} UserResponse
 * @property {number} _id
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} DeleteResponse
 * @property {string} message
 */

/**
 * Execute a get user request
 * @returns {Promise<UserResponse>}
 */
async function getUser() {
	const res = await axios.get('/users');
	return res.data?.user;
}

/**
 * Execute a get user request with a passed token
 * @param {string} token
 * @returns {Promise<UserResponse>}
 */
async function getUserWithPassedToken(token) {
	const res = await axios.get('/users', {
		headers: { Authorization: `Bearer ${token}` },
	});
	return res.data?.user;
}

/**
 * Execute an update user request
 * @param {Object} payload
 * @param {string} payload.firstName
 * @param {string} payload.lastName
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<UserResponse>}
 */
async function updateUser(payload) {
	const res = await axios.put('/users', payload);
	return res.data?.user;
}

/**
 * Execute an update user password request
 * @param {Object} payload
 * @param {string} payload.newPassword
 * @param {string} paylaod.confirmPassword
 * @returns {Promise<UserResponse>}
 */
async function updateUserPassword(payload) {
	const res = await axios.patch('/recover/password', payload, {});

	storeToken(res?.data?.token);

	return res.data;
}

/**
 * Execute a delete user request
 * @returns {Promise<DeleteResponse>}
 */
async function deleteUser() {
	const res = await axios.delete('/users');
	return res.data?.user;
}

export const UsersService = {
	getUser,
	getUserWithPassedToken,
	updateUser,
	updateUserPassword,
	deleteUser,
};
