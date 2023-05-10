import { ENVIRONMENT, MONGODB_NAME, MONGODB_URI, PORT } from "./env";
import mongoose from "mongoose";
import { app } from "./app";

async function bootstrap() {
  /** connect to mongodb and more here */
  try {
    await mongoose.connect(`${MONGODB_URI}/${MONGODB_NAME}`);
    console.log(`[Mongoose]: Connected to ${MONGODB_NAME} database!`);
  } catch (error) {
    console.log(error);
  }

  /** listen server */
  app.listen(PORT, () => {
    console.log(`[Server]: Listening on port ${PORT} in ${ENVIRONMENT} mode.`);
  });
}
bootstrap();
