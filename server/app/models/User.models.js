import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  accountId: { type: String },
  role: { type: Number },
});

const User = mongoose.model("users", userSchema);

export { User };
