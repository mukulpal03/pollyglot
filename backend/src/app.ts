import express from "express";
import helmet from "helmet";
import cors from "cors";
import translateRouter from "./routes/translate";

const app = express();

if (process.env.NODE_ENV === "production") app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
  }),
);

app.use("/api", translateRouter);

export default app;
