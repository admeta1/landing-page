import mongoose from "mongoose";

const mongodbUri =
  "mongodb+srv://aditya:Meta%40123@cluster0.txlbx2y.mongodb.net/UserDb?retryWrites=true&w=majority";

export const connectDB = function () {
  mongoose
    .connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    })
    .then((res) => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
