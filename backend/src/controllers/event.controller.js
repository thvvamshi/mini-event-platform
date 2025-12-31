import Event from "../models/Event.js";
import { v2 as cloudinary } from "cloudinary";

export const createEvent = async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path);
      imageUrl = upload.secure_url;
    }

    const event = await Event.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      capacity: req.body.capacity,
      dateTime: req.body.dateTime,
      image: imageUrl,
      createdBy: req.user.id
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("CREATE EVENT ERROR:", err);
    res.status(500).json({ message: "Failed to create event" });
  }
};

export const getEvents = async (req, res) => {
  const q = req.query.q || "";
  const events = await Event.find({
    title: { $regex: q, $options: "i" }
  }).sort({ dateTime: 1 });

  res.json(events);
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      createdBy: req.user.id
    });

    if (!event) return res.sendStatus(403);

    Object.assign(event, req.body);
    await event.save();

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Failed to update event" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const result = await Event.deleteOne({
      _id: req.params.id,
      createdBy: req.user.id
    });

    if (result.deletedCount === 0) {
      return res.sendStatus(403);
    }

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: "Failed to delete event" });
  }
};
