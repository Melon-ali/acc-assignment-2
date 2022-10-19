const mongoose = require("mongoose");

// schema
const toursShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a packageName for this tours"],
      trim: true, // age ba picher space gula kete dey
      unique: [true, "packageName must be unique"],
      minLength: [3, "packageName must be at least 3 characters"],
      maxLength: [100, "packageName is to large"],
    },

    description: {
      type: String,
      required: [true, "please provide a description for this tours"],
    },

    image: String,

    cost: {
      type: Number,
      required: [true, "please provide cost for this tours"],
      min: [0, "price can't be negative"],
    },

    visitor: {
      type: Number,
      required: true,
      min: [0, "visitor can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "visitor must be an integer",
    },

    viewCount: {
      type: Number,
      default: 0,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: {
        values: ["book-now", "wish-list"],
        message: "status value can't be {VALUE}, must be book-now/wish-list",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Tours = mongoose.model("Tours", toursShema);

module.exports = Tours;
