import dotenv from "dotenv";

dotenv.config();

export const Constant = {
    PORT:process.env.PORT,
    COURSE_MODEL:"Course",
    STUDENT_MODEL:"Student",
    API_VERSION:1,
    MONGO_DB_URL:process.env.MONGO_DB_URL,
    JWT_ACCESS_TOKEN_SECRET_KEY: process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
    JWT_REFRESH_TOKEN_SECRET_KEY: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
    JWT_ACCESS_TOKEN_SECRET_KEY_EXPIRATION_TIME: process.env.JWT_ACCESS_TOKEN_SECRET_KEY_EXPIRATION_TIME,
    JWT_REFRESH_TOKEN_SECRET_KEY_EXPIRATION_TIME:process.env.JWT_REFRESH_TOKEN_SECRET_KEY_EXPIRATION_TIME
}

// Single Source of Truth for .env file
