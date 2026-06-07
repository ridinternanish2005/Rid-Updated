const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  fileType: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },

  fileUrl: {
    type: String,
    required: true,
  },

  publicId: String, // cloudinary use kar rahe ho to

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);