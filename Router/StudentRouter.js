import express from'express';
import { getStudentsDetails,addStudents } from '../Controller/StudentController.js';
const router = express.Router();
router.get('/get-data-student' ,getStudentsDetails);
router.post('/add-student' ,addStudents);
export default router;
