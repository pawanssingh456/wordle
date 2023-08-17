// src/models/Game.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Game extends Document {
  word: string;
}

const gameSchema: Schema<Game> = new mongoose.Schema({
  word: { type: String, required: true },
}, {
  // Set the 'expires' option to expire documents at 12:00 AM UTC
  expires: '0 0 * * *', // This represents 12:00 AM UTC
});

const GameModel = mongoose.model<Game>('Game', gameSchema);

export default GameModel;