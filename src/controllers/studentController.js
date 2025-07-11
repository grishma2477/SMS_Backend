import { asyncHandler } from "../middleware/asyncHandler.js";
import Student from "../models/Student.js";
import { success } from "../utils/ApiResponse.js";

export const getAllStudent = asyncHandler(async (req,res) => {
    const allStudent = await Student.find();
    res.status(200).json({success})
})