import { Request, Response } from 'express';

import User from '../../models/User';
import { UserSchema } from '../../validation/User';

interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

async function getUser(request: AuthRequest, response: Response) {
  try {
    const user = await User.findById({ _id: request.user?.id }).select('-password');
    response.json({ user });
  } catch (e) {
    const error = (e as { message?: string; }).message ?? '';
    response.status(500).json({ message: `Server Error: ${error}` });
  }
};

async function updateUser(request: AuthRequest, response: Response) {
  const { name, email, password } = request.body;

  const parseResult = UserSchema.safeParse({ name, email, password });

  if (!parseResult.success) {
    response.status(400).json({ messages: parseResult.error.errors.map((v) => `${v.path}: ${v.message}`) });
    return;
  }

  try {
    const user = await User.findByIdAndUpdate({ _id: request.user?.id }, request.body, { new: true }).select('-password');
    response.json({ user });
  } catch (e) {
    const error = (e as { message?: string; }).message ?? '';
    response.status(500).json({ message: `Server Error: ${error}` });
  }
};

async function deleteUser(request: AuthRequest, response: Response) {
  try {
    await User.findByIdAndDelete({ _id: request.user?.id });
    response.json({ message: 'User deleted' });
  } catch (e) {
    const error = (e as { message?: string; }).message ?? '';
    response.status(500).json({ message: `Server Error: ${error}` });
  }
};

export default {
  getUser,
  updateUser,
  deleteUser,
};
