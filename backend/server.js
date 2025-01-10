import express from "express";
import morgan from "morgan";
import "dotenv/config";

import logger from "./utils/logger.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import mainRouter from "./routes/mainRouter.js";
import authorizeUser from "./middlewares/authMiddleware.js";

const app = express();

// Log HTTP requests using Morgan
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);
app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/main", authorizeUser, mainRouter);

app.listen(5000, () => {
  logger.info("Server running at 5000");
});
