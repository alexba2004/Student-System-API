import studentDao from "../dao/students.dao.js";
import Students from "../models/students.model.js";

export const createNewStudent = (req, res) => {
  res.render("../src/views/newStudent.ejs");
};
export const renderHome = (req, res) => {
  res.render("../src/views/home.ejs");
};

export const getAllStudents = (req, res) => {
  studentDao
    .getAll()
    .then((students) => {
      res.render("../src/views/viewStudents.ejs", { students });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getOneStudent = (req, res) => {
  const studentId = req.params.cn;
  console.log(studentId);
  studentDao
    .getOne(studentId)
    .then((student) => {
      if (student) {
        res.render("../src/views/editStudent.ejs", { student });
      } else {
        res.json({
          status: "Student not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};

export const insertStudent = (req, res) => {
  studentDao
    .insertStudent(req.body)
    .then((result) => {
      if (result) {
        res.render("../src/views/newStudent.ejs");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "Server unavailable",
      });
    });
};

export const updateStudent = (req, res) => {
  studentDao
    .updateStudent(req.params.cn, req.body)
    .then((result) => {
      if (result) {
        getAllStudents(req, res);
      }
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};

export const getOneDeleteStudent = (req, res) => {
  const studentId = req.params.cn;
  studentDao
    .deleteStudent(studentId)
    .then((student) => {
      if (student) {
        console.log("ELIMINADO");
        // Llamar al otro controlador
        getAllStudents(req, res);
      } else {
        getAllStudents(req, res);
      }
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};
