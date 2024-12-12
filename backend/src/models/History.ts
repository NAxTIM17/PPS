import { model, Schema } from 'mongoose';

const HistorySchema = new Schema(
	{
		userId: {
			type: String,
			require: true,
		},
		history: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Dashboard', // Referencia al modelo Dashboard
			},
		],
		tokens_used: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const History = model('History', HistorySchema);

export { HistorySchema, History };
