import dotenv from "dotenv";

dotenv.config();

export const Constant = {
    PORT:process.env.PORT,
    COURSE_MODEL:"Course",
    STUDENT_MODEL:"Student"
}