const express = require("express");

const app = express();
const courses = [
  { id: 1, name: "Computer Science" },
  { id: 2, name: "Data Structures" },
  { id: 3, name: "Algorithms" },
];

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  !course ? res.status(404).send("course not found") : res.send(course);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening at ${PORT}...`));
