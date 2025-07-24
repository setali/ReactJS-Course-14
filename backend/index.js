const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const user = {
  name: "Ali",
  family: "Mousavi",
};

const token = "hdjbankl;cksad;lnksbdhvbjns;dasdnasdjawqdskdndjfnsl";

app.get("/api/user", async (req, res) => {
  await delay(1500);

  if (req.headers.authorization !== token) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.json(user);
});

app.post("/api/login", async (req, res) => {
  await delay(1500);
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    return res.json({
      ...user,
      token,
    });
  }

  res.status(403).json({ error: "Username or Password is incorrect" });
});

app.listen(3000, () => {
  console.log("Server is running");
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
