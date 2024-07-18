import type { Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  name: string;
  password: string;
}

export type { IUser };
