import dbConnect from "@/db/connect";
import Workout from "@/db/models/Workout";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const workouts = await Workout.find();
    return response.status(200).json(workouts);
  }

  if (request.method === "POST") {
    try {
      const workoutData = request.body;

      const workout = new Workout(workoutData);

      await workout.save();

      response.status(201).json({ status: "Workout added" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
