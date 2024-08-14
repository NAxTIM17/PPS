import { Document, model, Schema } from 'mongoose';

interface IDrugstore extends Document {
	name: string;
	address?: string;
	phone_number?: string;
}

const DrugstoreSchema = new Schema(
	{},
	{
		timestamps: true,
	}
);

const Drugstore = model<IDrugstore>('Drugstore', DrugstoreSchema, 'drugstores');

export { IDrugstore, DrugstoreSchema, Drugstore };
