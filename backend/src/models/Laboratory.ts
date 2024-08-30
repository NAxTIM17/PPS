import { Document, model, Schema } from 'mongoose';

interface ILaboratory extends Document {
	name: string;
	registeredByUser: string;
}

const LaboratorySchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
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

const Laboratory = model<ILaboratory>(
	'Laboratory',
	LaboratorySchema,
	'laboratories'
);

export { ILaboratory, LaboratorySchema, Laboratory };
