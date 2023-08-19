import mongoose, { Schema, Document } from 'mongoose';
import hashPassword from '../utils/bcrypt';

export interface User extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  won: number;
  lost: number;
}

const userSchema: Schema<User> = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  won: { type: Number, default: 0 },
  lost: { type: Number, default: 0 },
});

// Password hashing middleware
userSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword
    next();
  } catch (error) {
    return next(error);
  }
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
