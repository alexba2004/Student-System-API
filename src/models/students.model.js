import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    controlnumber: {
      type: String,
      unique: true,
      required: true,
    },
    name: String,
    lastname: String,
    birthday: String,
    bloodtype: String,
    carrer: String,
    status: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("students", studentSchema);
