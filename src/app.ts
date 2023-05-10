import cors from "cors";
import express from "express";
import cookieSession from "cookie-session";
import "express-async-errors";

import { SESSION_KEY1, SESSION_KEY2 } from "./env";
import { errorHandler } from "./middleware/error-handler";
import { usersRouter } from "./routes/users";

export const app = express();

/** parse json */
app.use(express.json());

/** enable cors */
app.use(cors());

/** setup session */
app.use(
  cookieSession({
    name: "session",
    keys: [SESSION_KEY1, SESSION_KEY2]
  })
);

/** routes */
app.use(usersRouter);

/** throw error for none existing endpoints */
app.all("*", async (req, res) => {
  throw new Error("Invalid endpoint");
});

/** middleware that handle errors and send out error messages  */
app.use(errorHandler);
