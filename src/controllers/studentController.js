import { asyncHandler } from "../middleware/asyncHandler.js";
import Student from "../models/Student.js";
import { failure, success } from "../utils/ApiResponse.js";
import bcrypt from "bcryptjs";
import { Constant } from "../utils/constant.js";
import jwt from "jsonwebtoken";

export const getAllStudent = asyncHandler(async (req,res) => {
    const allStudent = await Student.find();
    res.status(200).json(success("All students fetched successfully.",allStudent));
});

export const getSingleStudentById = asyncHandler(async (req,res) => {
    const {id} = req.params;
    const singleStudent = await Student.findById(id);
    if (!singleStudent){
        return failure(404, "Student not found.")
    }
    res.status(200).json(success(`Student with ${id} found successfully.`, singleStudent));
})

export const registerStudent = asyncHandler(async (req,res) => {
    const {name, email, password, phone} = req.body;
    const isStudentAlreadyExists = await Student.findOne({email});
    if (isStudentAlreadyExists){
    return failure(409, "An student with this email already exists.")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
    name,
    email,
    password:hashedPassword,
    phone
    })
    await newStudent.save({validateBeforeSave:true});
    res.status(201).json(success("Registered Student Successfully."))
    
})

export const loginStudent = asyncHandler(async (req,res) => {
    const {email, password} = req.body;
    const studentExists = await Student.findOne({email}).select("+password");
   if  (!studentExists ){
        return failure(400, "Either email or password is incorrect. ")
    }
  
    const isPasswordCorrect = await bcrypt.compare(password, studentExists.password)
    if (!isPasswordCorrect){
        return failure(400, "Either email or password is incorrect.")
    }
    const payload = {
        _id:studentExists._id,
        email:studentExists.email
    }
    const accessTokenSecretKey = Constant.JWT_ACCESS_TOKEN_SECRET_KEY
    const refreshTokenSecretKey = Constant.JWT_REFRESH_TOKEN_SECRET_KEY
    const accessToken = jwt.sign(payload,accessTokenSecretKey,{expiresIn:Constant.JWT_ACCESS_TOKEN_SECRET_KEY_EXPIRATION_TIME})
    const refreshToken = jwt.sign(payload,refreshTokenSecretKey,{expiresIn:Constant.JWT_REFRESH_TOKEN_SECRET_KEY_EXPIRATION_TIME})
    res.status(200).json({...success("Login Successful"),accessToken,refreshToken})
})

