import express from "express";
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} from "../controllers/event.controller.js";

import {
  joinEvent,
  leaveEvent
} from "../controllers/rsvp.controller.js";

import { auth } from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

/* Events */
router.get("/events", getEvents);
router.post("/events", auth, upload.single("image"), createEvent);
router.put("/events/:id", auth, updateEvent);
router.delete("/events/:id", auth, deleteEvent);

/* RSVP */
router.post("/events/:id/rsvp", auth, joinEvent);
router.delete("/events/:id/rsvp", auth, leaveEvent);

export default router;
