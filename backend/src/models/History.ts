import { Document, model, Schema } from 'mongoose';

import { Dashboard, DashboardSchema } from './Dashboard';

const HistorySchema = new Schema(
	{
		history: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dashboard', // Referencia al modelo Dashboard
			},
		],
	},
	{
		timestamps: true,
	}
);

const History = model('History', HistorySchema);

export { HistorySchema, History };
