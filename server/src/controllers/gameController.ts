// src/controllers/gamesController.ts
import { Request, Response } from 'express';
import GameModel, { Game } from '../models/Game';
import UserModel from '../models/User';

// Function to generate a new word every 12 hours (you can replace this logic with your own)
const generateWord = async () => {
  const word = await fetch('https://wordle-answers-solutions.p.rapidapi.com/today', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd6a70ec010msha4334ca70a8ab56p1a65b8jsn30b9f54e57ea',
      'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
    },
  })
  const result = await word.json()
  return result.today
};

const findWord = async () => {

  const result = await GameModel.findOne({});

  return result?.word
}

export const createGame = async (_req: Request, res: Response) => {
  try {

    let word = await findWord()

    if(!word) {
      word = await generateWord();
      const newGame: Game = await GameModel.create({ word });
    }

    res.status(201).json(word);
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
