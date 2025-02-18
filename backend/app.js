import express from "express";

const app = express();

// Greet Route
import greetRoute from "./route/greet.route.js";

app.use("/api/greet", greetRoute);

export default app;
