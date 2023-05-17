import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
//queries
import { getPlanets } from "./queries.js";
//socket.io
import { Server } from "socket.io";
import { createServer } from "http";
import { connection_handler } from "./socket/index.js";
//pg
import { pool } from "./pg.js";
import listEndpoints from "express-list-endpoints";
const app = express();
const port = 3002;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "https://solar-system-xi-amber.vercel.app",
      "https://solarsystembe-production.up.railway.app",
    ],
    methods: ["GET", "POST"],
  },
}); // this constructor is expecting to receive an HTTP-SERVER as parameter not an EXPRESS SERVER!!!
io.on("connection", connection_handler); // "connection" is NOT a custom event! This is a socket.io event, triggered every time a new client connects!
app.use(express.json());

// const accessOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "http://localhost:3002",
//   "https://solar-system-xi-amber.vercel.app",
//   "https://solarsystembe-production.up.railway.app",
// ];
// const corsOptions = {
//   origin: (origin, corsNext) => {
//     if (!origin || accessOrigins.indexOf(origin) !== -1) {
//       console.log("Origin: ", origin);
//       corsNext(null, true);
//     } else {
//       corsNext(new Error(`Access to server denied, your origin: ${origin}`));
//     }
//   },
// };

// // CORS
// app.use(cors(corsOptions));

app.get("/planets", getPlanets);

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });
// httpServer.listen(port, () => {
//   console.table(listEndpoints(app));
//   console.log(`Server is running on port ${port}`);
// });

//
pool.connect((err) => {
  if (err) {
    console.error("Failed to connect to PostgreSQL:", err);
    return;
  }
  console.log("Successfully connected to PostgreSQL!");
  // Start the server
  // app.listen(port, () => {
  //   console.table(listEndpoints(app));
  //   console.log(`App running on port ${port}.`);
  // });
  console.log("Starting http server...");
  httpServer.listen(port, () => {
    console.table(listEndpoints(app));
    console.log(`Server is running on port ${port}`);
  });
});
