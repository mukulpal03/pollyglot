import express from "express";
import helmet from "helmet";
import translateRouter from "./routes/translate";

const app = express();

if (process.env.NODE_ENV === "production") app.use(helmet());

app.use(express.json());

app.use("/api", translateRouter);

export default app;
