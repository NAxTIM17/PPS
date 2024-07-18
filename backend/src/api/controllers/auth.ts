import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import type { Request, Response } from 'express';

import User from '../../models/User';
import config from '../../config';

async function registerUser(request: Request, response: Response): Promise<void> {
  const { name, email, password } = request.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      response.status(400).json({ message: 'User already exists' });
      return;
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };

    jwt.sign(payload, config.JWT_SECRET_KEY, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (e) {
    const error = (e as { message?: string }).message ?? '';
    response.status(500).json({ message: `Server error: ${error}` });
  }
}

async function loginUser(request: Request, response: Response): Promise<void> {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      response.status(400).json({ message: 'Invalid Credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      response.status(400).json({ message: 'Invalid Credentials' });
      return;
    }

    const payload = { user: { id: user._id } };

    jwt.sign(payload, config.JWT_SECRET_KEY, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (e) {
    const error = (e as { message?: string }).message ?? '';
    response.status(500).json({ message: `Server Error: ${error}` });
  }
}

export default {
  registerUser,
  loginUser,
};
