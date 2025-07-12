import mongoose from "mongoose";
import { Constant } from "../utils/constant.js";

const db_url = Constant.MONGO_DB_URL;

export const dbConnection = async () => {
    await mongoose.connect(db_url);
}