import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRouter from './routes/users';
import gamesRoutes from './routes/game';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

//Initialise database
require("./db");

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/games', gamesRoutes);

// 404 Not Found Middleware
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
