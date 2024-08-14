import { Document, model, Schema } from 'mongoose';

interface IProduct extends Document {
	name: string;
	code: string;
	price: number;
	details: string[];
	laboratory: string;
}

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		code: {
			type: String,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
		},
		details: {
			type: [String],
			default: [],
			required: true,
		},
		laboratory: {
			type: Schema.Types.ObjectId,
			ref: 'Laboratory',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Product = model<IProduct>('Product', ProductSchema, 'products');

export { IProduct, ProductSchema, Product };
