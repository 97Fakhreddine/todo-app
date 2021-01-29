const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
port = 3001;
app.listen(port, () => console.log(`server is listening at ${port}`));

app.get("/tasks", (req, res) => {
  if (err) {
    throw err;
  } else {
    res.send("all tasks");
    res.sendStatus(200);
  }
});

app.get("/addTask", (req, res) => {
  if (err) {
    throw err;
  } else {
    res.send("You can add a task");
    res.sendStatus(200);
  }
});

app.get("/deleteTask", (req, res) => {
  if (err) {
    throw err;
  } else {
    res.send("You can delete a task");
    res.sendStatus(200);
  }
});
