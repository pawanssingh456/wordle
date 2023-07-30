// src/models/Game.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Game extends Document {
  word: string;
  attempts: number;
  guessedWords: string[];
}

const gameSchema: Schema<Game> = new mongoose.Schema({
  word: { type: String, required: true },
  attempts: { type: Number, required: true },
  guessedWords: { type: [String], default: [] },
});

const GameModel = mongoose.model<Game>('Game', gameSchema);

export default GameModel;
