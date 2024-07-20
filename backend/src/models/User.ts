import mongoose from 'mongoose';

import type { IUser } from '../interfaces/IUser';

const UserSchema = new mongoose.Schema(
  {
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
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type { IUser };
export default mongoose.model<IUser>(
  'User',
  UserSchema,
  'users'
);
