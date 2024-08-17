import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
	firstName?: string;
	lastName?: string;
	role: 'basic' | 'subscribed';
	email: string;
	password: string;
}

const UserSchema = new Schema(
	{
		firstName: {
			type: String,
			trim: true,
		},
		lastName: {
			type: String,
			trim: true,
		},
		role: {
			type: String,
			trim: true,
			enum: ['basic', 'subscribed'],
			default: 'basic',
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = model<IUser>('User', UserSchema, 'users');

export { IUser, UserSchema, User };
