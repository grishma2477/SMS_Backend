import express from "express";
import * as studentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/", studentController.getAllStudent);

export default router;
