import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import studentsRouter from "./routes/students.routes.js";

const app = express();

//Settings
app.set("view engine", "ejs");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", studentsRouter);

export default app;
