// src/utils/jwtUtils.ts
import jwt from 'jsonwebtoken';
import fs from 'fs';

const SECRET_KEY = 'your-secret-key'; // Replace with your own secret key (keep it safe)
const TOKEN_FILE_PATH = 'tokens.json'; // JSON file to store tokens
const BLACKLIST_FILE_PATH = 'blacklist.json'; // JSON file to store blacklisted tokens

const loadTokensFromFile = (filePath: string): string[] => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const { tokens } = JSON.parse(data);
    return tokens || [];
  } catch (error) {
    return [];
  }
};

const saveTokensToFile = (filePath: string, tokens: string[]) => {
  fs.writeFileSync(filePath, JSON.stringify({ tokens }));
};

// Function to create a JWT token
export const generateToken = (payload: object): string => {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Set the token expiration time
  const tokens = loadTokensFromFile(TOKEN_FILE_PATH);
  tokens.push(token);
  saveTokensToFile(TOKEN_FILE_PATH, tokens);
  return token;
};

// Function to verify a JWT token
export const verifyToken = (token: string): any => {
  const blacklistedTokens = loadTokensFromFile(BLACKLIST_FILE_PATH);
  if (blacklistedTokens.includes(token)) {
    return null; // Token is blacklisted, return null to reject the request
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};

// Function to revoke a JWT token (add it to the blacklist)
export const revokeToken = (token: string): void => {
  const tokens = loadTokensFromFile(TOKEN_FILE_PATH);
  if (!tokens.includes(token)) {
    throw new Error('Token not found');
  }

  const updatedTokens = tokens.filter((t) => t !== token);
  saveTokensToFile(TOKEN_FILE_PATH, updatedTokens);

  const blacklistedTokens = loadTokensFromFile(BLACKLIST_FILE_PATH);
  blacklistedTokens.push(token);
  saveTokensToFile(BLACKLIST_FILE_PATH, blacklistedTokens);
};
