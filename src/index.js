import express from "express";
import dotenv from "dotenv";
import cors from "cors";
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
const port = process.env.PORT || 3001;



// CATCH ALL INVALID ROUTES
app.use("*", (req, res, next) => {
  res.status(404).json({
    error: "Invalid route"
  });
  next();
});

process.on("uncaughtException", (err) => {
  log.info("WE GOT AN UNCAUGHT EXCEPTION");
  console.log(err)
  process.exit(0);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err)
});
process.on("unhandledRejection", (err) => {
  log.info("WE GOT AN UNHANDLED REJECTION");
  console.log(err)
  process.exit(0);
});

// Listen to port
app.listen(port, () => {
  log.info(`App is listening on ${hostname}: ${port}`);
});


export default app;
