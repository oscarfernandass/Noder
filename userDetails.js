const mongoose = require("mongoose");
const { Schema } = mongoose;

// UserInfo Schema
const userSchema = new Schema({
  message: String,
  date: String,
});

mongoose.model("UserInfo", userSchema);

// Profile Card Schema
const profileCardSchema = new Schema({
  name: String,
  id: String,
  class: String,
  number: String,
  email: String,
  parent: String,
  contact: String,
  address: String,
});

mongoose.model("ProfileCardInfo", profileCardSchema);
