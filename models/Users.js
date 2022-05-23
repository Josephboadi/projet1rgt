const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
    },
    email_verified: {
      type: Boolean,
      required: true,
    },
    auth_time: {
      type: String,
      required: true,
    },
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
