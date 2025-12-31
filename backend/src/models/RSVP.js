
import mongoose from "mongoose";
const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
}, { timestamps: true });
schema.index({ user: 1, event: 1 }, { unique: true });
export default mongoose.model("RSVP", schema);
