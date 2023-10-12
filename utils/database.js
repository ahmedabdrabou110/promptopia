import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MONGODB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "promptopia",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MONGODB is connected");
  } catch (e) {
    console.error(e);
  }
};
