import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  amount: { type: Number },
  credit: { type: Number },
  acive: { type: Boolean },
});

const Acconut = mongoose.model("accounts", accountSchema);
export { Acconut };
