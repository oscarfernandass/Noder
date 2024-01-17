const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  message: String,
  date: String,
});

mongoose.model("UserInfo", userSchema);
