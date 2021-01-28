import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import helmet from "helmet";
import logger from "morgan";
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
import log from "./utils/logger";
import routes from "./Routes/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,x-auth,Accept,content-type,application/json"
  );
  next();
});
// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());
app.use(logger("dev"));

// Prevent http param pollution
app.use(hpp());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Parse incoming requests data
app.use((req, res, next) => {
  bodyParser.json()(req, res, err => {
      if (err) {
        return res.status(400).json({
          message: "Invalid JSON payload passed.",
          status: "error",
          data: null
      })
      }
      next();
  });
});
app.use(bodyParser.urlencoded({ extended: true }));
// base api

app.use("/", routes);
// get the host and port name
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 4000;

// const connectionUrl =
//   process.env.NODE_ENV === "production"
//     ? process.env.MONGODB_URL_PROD
//     : process.env.MONGODB_URL_DEV;
// mongoose.connect(
// connectionUrl,  {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   },
//   () => {
//     log.info("Connected to database successfully");
//   }
// );

// CATCH ALL INVALID ROUTES
app.use("*", (req, res, next) => {
  res.status(404).json({
    error: "Invalid route"
  });
  next();
});

process.on("uncaughtException", () => {
  log.info("WE GOT AN UNCAUGHT EXCEPTION");
  process.exit(0);
});

process.on("unhandledRejection", () => {
  log.info("WE GOT AN UNHANDLED REJECTION");
  process.exit(0);
});

// Listen to port

app.listen(port, () => {
  log.info(`App is listening on ${hostname}: ${port}`);
});

process.on("SIGINT", async () => {
  await mongoose.connection.close(); // close DB
  log.info("Shutting down server");
  log.info("Server successfully shut down");
  process.exit(0);
});
export default app;
