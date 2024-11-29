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
		},
		fin: {
			type: String,
		},
	},
});

const Dashboard = model('Dashboard', DashboardSchema);

export { DashboardSchema, Dashboard };
