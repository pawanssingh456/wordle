// src/routes/users.ts
import express from 'express';
import { getUsers, createUser, loginUser, logoutUser } from '../controllers/usersController';

const router = express.Router();

// router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser); // Login route
router.post('/logout', logoutUser); // Login route

export default router;
