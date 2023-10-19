import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "To Read",
    },
    note: {
      type: String,
      default: "note...",
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("BookItems", bookSchema);
