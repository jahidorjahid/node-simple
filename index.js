const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Route");
});

const users = [
  {
    id: 1,
    name: "Jahid Hasan",
    deperment: "Computer",
  },
  {
    id: 2,
    name: "Murad Ahmed",
    deperment: "Electrical",
  },
  {
    id: 3,
    name: "Riyad",
    deperment: "Mecanical",
  },
];

// users api get
app.get("/users", (req, res) => {
  res.send(users);
});

// users api post
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("post request success ", req.body);
  res.json(newUser);
});

// single user get
app.get("/users/:id", (req, res) => {
  const uid = req.params.id;

  const user = users.filter((u) => u.id == uid);
  console.log(user);

  if (user.length) {
    res.send(user);
  } else {
    res.send({ error: "user not found" });
  }
});

// listening my app
app.listen(port, () => {
  console.log("Listening port : ", port);
});
