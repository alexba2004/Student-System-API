import Student from "../models/students.model.js";

const studentsDao = {};

studentsDao.getAll = async () => {
  const students = await Student.find();
  return students;
};

studentsDao.getOne = async (cn) => {
  const student = await Student.findOne({ controlnumber: cn });
  return student;
};

studentsDao.insertStudent = async (student) => {
  const studentSaved = new Student(student);
  await studentSaved.save();
  return true;
};

studentsDao.updateStudent = async (controlnumber, student) => {
  await Student.findOneAndUpdate({ controlnumber: controlnumber }, student);
  return true;
};

studentsDao.deleteStudent = async (controlnumber) => {
  const studentDelete = await Student.findOneAndDelete({ controlnumber: controlnumber });
  console.log(studentDelete);
  if (studentDelete != null) {
    return true;
  } else {
    return false;
  }
};

export default studentsDao;
