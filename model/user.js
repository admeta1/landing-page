import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNo: {
    type: String,
    unique: true,
  },

  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});
export const User = mongoose.model("User", schema);
