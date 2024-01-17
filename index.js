const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoUrl = "mongodb+srv://oscar:oscar%40546@cluster0.nbn0hpp.mongodb.net/Tensor";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

// Only keep the GET method
app.get("/get", async (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length > 0) {
      res.send({ status: "ok", users: allUsers });
    } else {
      res.send({ status: "not found", message: "No users found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server is Running" + PORT);
});
