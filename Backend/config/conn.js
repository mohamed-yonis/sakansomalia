import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.db_url);
    console.log("db connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default ConnectDB;
