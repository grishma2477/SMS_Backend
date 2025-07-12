import express from "express";
import * as studentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/", studentController.getAllStudent);
router.get("/:id",studentController.getSingleStudentById);
router.post("/register", studentController.registerStudent);
router.post("/login", studentController.loginStudent);

export default router;
