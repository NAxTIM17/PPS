import type { Document } from 'mongoose';

import mongoose from 'mongoose';

interface IUser extends Document {
	hasChangedDefaultPassword: boolean;
	role: 'employee' | 'admin';
	email?: string;
	username: string;
	password: string;
}

const UserSchema = new mongoose.Schema(
	{
		hasChangedDefaultPassword: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			trim: true,
			enum: ['employee', 'admin'],
			default: 'employee',
		},
		email: {
			type: String,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
		},
		username: {
			type: String,
			trim: true,
			unique: true,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export type { IUser };
export default mongoose.model<IUser>('User', UserSchema, 'users');
