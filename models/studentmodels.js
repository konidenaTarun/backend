import mongoose from "mongoose";
const studentschema = new mongoose.Schema({
    studentname : {
        type: String
    },
    studentRoll : {
        type: String
    },
    studentphone : {
        type: Number
    },
    studentEmail : {
        type : String
    }
})
const student= mongoose.model("student",studentschema);
export default student;
