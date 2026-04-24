import express from "express";
import translateRouter from "./routes/translate";

const app = express();

app.use(express.json());

app.use("/api", translateRouter);

export default app;
