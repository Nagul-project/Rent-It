import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function connectDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "rentIT",
    })
    .then((conn) => {
      console.log("MongoDB connected!");
      console.log("Connected host:", conn.connection.host);
    })
    .catch((err) => {
      console.error("MongoDB connection error: ", err);
    });
}

export default connectDatabase;
