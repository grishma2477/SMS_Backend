import mongoose from "mongoose";
import { Constant } from "../utils/constant";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true
    },
    description:{
        type:String,
        default: ""
    },
    students:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:Constant.STUDENT_MODEL 
    }]
    
},{timestamps:true})

export default mongoose.model(Constant.COURSE_MODEL, courseSchema);