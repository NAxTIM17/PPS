import { Document, model, Schema } from 'mongoose';

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
			required: true,
		},
		fin: {
			type: String,
			required: true,
		},
	},
});

const Dashboard = model('Dashboard', DashboardSchema);

export { DashboardSchema, Dashboard };
