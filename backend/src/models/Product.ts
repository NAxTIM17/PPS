import { Document, model, Schema } from 'mongoose';

interface IProduct extends Document {
	nombre: string;
	laboratorio: string;
	precio: number;
}

const ProductSchema = new Schema({
	nombre: {
		type: String,
		trim: true,
		required: true,
	},
	laboratorio: {
		type: String,
		trim: true,
	},
	precio: {
		type: Number,
		required: true,
	},
});

const Product = model<IProduct>('Product', ProductSchema, 'products');

export { IProduct, ProductSchema, Product };
