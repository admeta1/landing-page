import mongoose from "mongoose";

// const mongodbUri =
//   "mongodb+srv://aditya:Meta%40123@cluster0.txlbx2y.mongodb.net/UserDb?retryWrites=true&w=majority";

  const mongodbUri =
  "mongodb+srv://metaversity:hoK1CRZR8rskgSuC@metaversity.zsgocsy.mongodb.net/marketingData";

export const databaseConnection = function (callback) {
  mongoose
    .connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: false,
    })
    .then((res) => {
      console.log("database connected");
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};
