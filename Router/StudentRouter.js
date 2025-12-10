import express from'express';
import { getStudents,addstudents } from '../Controller/StudentController.js';
const router = express.Router();
router.get('/get-student' ,getStudents);
router.post('/add-student' ,addstudents);
export default router;
