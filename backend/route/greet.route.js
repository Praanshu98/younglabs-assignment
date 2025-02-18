import { Router } from "express";
import greetController from "../controller/greet.controller.js";

const router = Router();

router.get("/", greetController);

export default router;
