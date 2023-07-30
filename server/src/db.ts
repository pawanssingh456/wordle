import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

/**
 * Database class to connect to MongoDB database.
 */
class Database {
  /**
   * Constructor to create a new instance of the Database class.
   */
  constructor() {
    this.connect();
  }

  /**
   * Method to connect to the MongoDB database.
   */
  async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_URL as string);
      console.log("Connected to the database.");
    } catch (err) {
      console.log("Error connecting to the database:", err);
    }
  }
}

export default new Database();
