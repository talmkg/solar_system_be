import express from "express";
import bodyParser from "body-parser";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./queries.js";
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
