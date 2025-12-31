import Event from "../models/Event.js";

export const joinEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.sendStatus(404);

  if (event.attendees.includes(req.user.id)) {
    return res.status(400).json({ message: "Already joined" });
  }

  if (event.attendees.length >= event.capacity) {
    return res.status(400).json({ message: "Event is full" });
  }

  event.attendees.push(req.user.id);
  await event.save();

  res.json({ message: "Joined event" });
};

export const leaveEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.sendStatus(404);

  event.attendees = event.attendees.filter(
    (u) => u.toString() !== req.user.id
  );

  await event.save();
  res.json({ message: "Left event" });
};
