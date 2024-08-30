import { Document, model, Schema } from 'mongoose';

import { DrugstoreSchema, IDrugstore } from './Drugstore';
import { ProductSchema, IProduct } from './Product';

interface IDashboard extends Document {
	shopcart: {
		total: number;
		products: Array<IProduct & { quantity: number }>;
	};
	drugstores: Array<IDrugstore & { products: Array<IProduct> }>;
	registeredByUser: string;
}

const DashboardSchema = new Schema(
	{
		shopcart: {
			type: {
				total: {
					type: Number,
					required: true,
				},
				products: {
					type: [
						{
							quantity: Number,
							...ProductSchema.obj,
						},
					],
					required: true,
					default: [],
				},
			},
		},
		drugstores: {
			type: [
				{
					products: {
						type: [ProductSchema],
						required: true,
						default: [],
					},
					...DrugstoreSchema.obj,
				},
			],
		},
		registeredByUser: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Dashboard = model<IDashboard>('Dashboard', DashboardSchema, 'dashboards');

export { IDashboard, DashboardSchema, Dashboard };
