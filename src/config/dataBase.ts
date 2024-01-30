import { env } from "../config/env";
import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const MONGO_URL = `mongodb+srv://${env.USER}:${env.PASSWORD}@metdb.i92brbz.mongodb.net/?retryWrites=true&w=majority`
    
    await mongoose.connect(MONGO_URL);
    
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Couldn't connect to Mongo", error);
  }
};

export default connectToMongo;