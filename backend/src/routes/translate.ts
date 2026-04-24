import { Router } from "express";
import translateController from "../controllers/translate";

const router = Router();

router.route("/translate").post(translateController);

export default router;
