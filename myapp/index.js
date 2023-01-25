const express = require("express");
const cors = require("cors");
const { request } = require("express");

const port = 8080;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  const { id } = request.query;
  response.json({ status: true, result: [{ id: 1, name: "Hello" }] });
});

app.get("/add", (request, response) => {
  const { a, b } = request.query;

  let result = Number(a) + Number(b);
  response.json({ value: result });
});

app.get("/api", (request, response) => {
  const { id } = request.query;
  console.log("api is running");
  response.json({ status: true });
});

app.listen(port, () => {
  console.log("Server is running on" + port);
  console.log("hello list");
});
