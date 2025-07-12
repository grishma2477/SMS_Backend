import mongoose, { Mongoose } from "mongoose";
import { Constant } from "../utils/constant.js";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Constant.COURSE_MODEL
    }]
},{timestamps:true})

export default mongoose.model(Constant.STUDENT_MODEL, studentSchema);