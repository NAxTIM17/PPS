import { Document, model, Schema } from 'mongoose';

interface IDrugstore extends Document {
	name: string;
	address?: string;
	phone_number?: string;
}

const DrugstoreSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		address: {
			type: String,
			trim: true,
		},
		phone_number: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

const Drugstore = model<IDrugstore>('Drugstore', DrugstoreSchema, 'drugstores');

export { IDrugstore, DrugstoreSchema, Drugstore };
