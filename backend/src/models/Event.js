import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    capacity: Number,
    dateTime: Date,
    image: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

eventSchema.virtual("attendeesCount").get(function () {
  return this.attendees.length;
});

eventSchema.set("toJSON", { virtuals: true });
eventSchema.set("toObject", { virtuals: true });

export default mongoose.model("Event", eventSchema);
