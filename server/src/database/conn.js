import mongoose from "mongoose" ;
const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://murlidhar1105:mongodb1105@cluster0.ciqx3s1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();