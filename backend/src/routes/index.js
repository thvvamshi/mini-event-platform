import express from "express";
import authRoutes from "./auth.routes.js";
import eventRoutes from "./event.routes.js";

const router = express.Router();

router.use(authRoutes);
router.use(eventRoutes);

export default router;
