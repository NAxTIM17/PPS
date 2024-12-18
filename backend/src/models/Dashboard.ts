import { model, Schema } from 'mongoose';

import { ProductSchema } from './Product';

const DashboardSchema = new Schema({
	drogueria: {
		type: String,
		required: true,
	},
	productos: [ProductSchema],
	oferta_valida: {
		inicio: {
			type: String,
			default: null,
		},
		fin: {
			type: String,
			default: null,
		},
	},
	numero_celular: {
		type: String,
		default: null,
	},
});

const Dashboard = model('Dashboard', DashboardSchema);

export { DashboardSchema, Dashboard };
