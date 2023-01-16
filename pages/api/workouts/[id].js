import dbConnect from "@/db/connect";
import Workout from "@/db/models/Workout";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const workout = await Workout.findById(id);
    try {
      if (!workout) {
        return response.status(404).json({ status: "Not Found" });
      }
      return response.status(200).json(workout);
    } catch (error) {
      // Log the error
      console.error(error);

      // Check the error type
      if (error instanceof MongoError) {
        // Handle MongoDB-specific errors
        return response.status(500).json({ error: "Failed to update workout" });
      } else if (error instanceof CastError) {
        // Handle invalid ObjectId errors
        return response.status(400).json({ error: "Invalid workout ID" });
      } else {
        // Handle any other errors
        return response.status(500).json({ error: "Failed to update workout" });
      }
    }
  }

  if (request.method === "PUT") {
    try {
      const updatedWorkout = await Workout.findByIdAndUpdate(id, {
        $set: request.body,
      });
      return response.status(200).json({ status: "Workout updated" });
    } catch (error) {
      // Log the error
      console.error(error);

      // Check the error type
      if (error instanceof MongoError) {
        // Handle MongoDB-specific errors
        return response.status(500).json({ error: "Failed to update workout" });
      } else if (error instanceof CastError) {
        // Handle invalid ObjectId errors
        return response.status(400).json({ error: "Invalid workout ID" });
      } else {
        // Handle any other errors
        return response.status(500).json({ error: "Failed to update workout" });
      }
    }
  }
}
