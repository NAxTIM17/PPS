import axios from 'axios';

/**
 * @typedef {Object} Detail
 * @property {string} unity
 */

/**
 * @typedef {Object} Product
 * @property {string} name
 * @property {Detail} detail
 * @property {string} code
 * @property {number} price
 * @property {string} laboratory
 */

/**
 * @typedef {Object} Shopcart
 * @property {number} total
 * @property {Array.<Product>} products
 */

/**
 * @typedef {Object} Drugstore
 * @property {string} name
 * @property {string} adress
 * @property {string} phone_number
 * @property {Array.<Product>} products
 */

/**
 * @typedef {Object} Dashboard
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Shopcart} shopcart
 * @property {Drugstore} drugstores
 */

/**
 * @typedef {Array.<Dashboard>} Historial
 */

/**
 * @typedef {Object} UpdateResponse
 * @property {string} message
 */

/**
 * @returns {Promise<Historial>}
 */
async function getDashboards() {
	const res = await axios.get('/dashboard/historial/');
	return res.data;
}

/**
 * @param {string} id
 * @returns {Promise<Dashboard>}
 */
async function getDashboard(id) {
	const res = await axios.get(`/dashboard/historial/${id}`);
	return res.data;
}

/**
 * @param {Dashboard} payload
 * @param {string} id
 * @returns {Promise<UpdateResponse>}
 */
async function updateDashboard(payload, id) {
	const res = await axios.put(`/dashboard/historial/${id}`, payload);
	return res.data;
}

export const HistorialService = {
	getDashboards,
	getDashboard,
	updateDashboard,
};
