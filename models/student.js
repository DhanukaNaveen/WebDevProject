import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number

});

const Student = mongoose.model("students", studentSchema);

export default Student;