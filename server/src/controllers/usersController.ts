// src/controllers/usersController.ts
import { Request, Response } from 'express';
import UserModel, { User } from '../models/User';
import bcrypt from 'bcrypt';
import { revokeToken, generateToken, verifyToken } from '../utils/jwt';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users: User[] = await UserModel.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user: User | null = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password.toString(), user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken({ _id: user._id, name: user.name, email: user.email });

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const newUser: User = await UserModel.create({ name, email, password });
    // Generate JWT token
    const token = generateToken({ _id: newUser._id, name: newUser.name, email: newUser.email });
    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const logoutUser = (req: Request, res: Response) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(400).json({ message: 'Token not found' });
  }

  // Verify the token before performing logout
  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Revoke the token (remove it from the token list and add it to the blacklist)
  // revokeToken(token);

  // Respond with a success message
  res.status(200).json({ message: 'Logout successful' });
};
