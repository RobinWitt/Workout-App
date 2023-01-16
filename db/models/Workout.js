import mongoose from "mongoose";
const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  sets: { type: Number, required: true },
  repetitions: { type: Number, required: true },
  duration: { type: Number, required: true },
  breaktime: { type: Number, required: true },
});

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
