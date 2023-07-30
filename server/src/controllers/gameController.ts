// src/controllers/gamesController.ts
import { Request, Response } from 'express';
import GameModel, { Game } from '../models/Game';
import UserModel from '../models/User';

// Function to generate a new word every 12 hours (you can replace this logic with your own)
const generateWord = () => {
  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi'];
  return words[Math.floor(Math.random() * words.length)];
};

export const createGame = async (_req: Request, res: Response) => {
  try {
    // Generate a new word every 12 hours (for simplicity, this is done on every request; you should set up a cron job)
    const word = generateWord();
    const attempts = 6;
    const newGame: Game = await GameModel.create({ word, attempts });
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getUserStats = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId; // Assuming you have a userId in the request (use authentication to get userId)
    // Retrieve user details and their completed games count from the database
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const completedGames = user.completedGames;
    res.status(200).json({ completedGames });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
