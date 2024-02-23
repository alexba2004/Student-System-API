import { Router } from "express";
import { renderHome, createNewStudent, getAllStudents, getOneDeleteStudent, getOneStudent, insertStudent, updateStudent } from "../controllers/students.controller.js";

const router = Router();

router.get("/newStudent", createNewStudent);
router.get("/students", getAllStudents);
router.get("/", renderHome);
router.get("/:cn", getOneStudent);
router.get("/delete/:cn", getOneDeleteStudent);
router.post("/", insertStudent);
router.post("/update/:cn", updateStudent);

export default router;
