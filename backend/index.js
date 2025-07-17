const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const user = {
  name: "Ali",
  family: "Mousavi",
};

app.get("/api/user", (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 500);
});

app.post("/api/login", async (req, res) => {
await delay(1500)
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    return res.json(user);
  }

  res.status(404).json({ error: "Username or Password are incorrect" });
});

app.listen(3000, () => {
  console.log("Server is running");
});


function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}