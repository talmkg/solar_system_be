import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getPlanets } from "./queries.js";
const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

const accessOrigins = [
  "http://localhost:3001",
  "https://solar-system-xi-amber.vercel.app",
  "https://solarsystembe-production.up.railway.app",
];
const corsOptions = {
  origin: (origin, corsNext) => {
    if (!origin || accessOrigins.indexOf(origin) !== -1) {
      console.log("Origin: ", origin);
      corsNext(null, true);
    } else {
      corsNext(new Error(`Access to server denied, your origin: ${origin}`));
    }
  },
};

// CORS
app.use(cors(corsOptions));

app.get("/planets", getPlanets);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
