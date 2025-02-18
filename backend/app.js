import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Greet Route
import greetRoute from "./route/greet.route.js";

app.use("/api/greet", greetRoute);

export default app;
