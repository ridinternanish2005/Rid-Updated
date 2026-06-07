const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const Banner = require("../models/Bainar/Bainar");

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video");

    return {
      folder: "RID-Banner",
      resource_type: isVideo ? "video" : "image",
      public_id: "banner_" + Date.now(),
    };
  },
});

const upload = multer({ storage });

router.post(
  "/admin/banner/upload",
  upload.single("banner"),
  async (req, res) => {
    try {
      // Purana banner
      const oldBanner = await Banner.findOne();

      if (oldBanner) {
        try {
          await cloudinary.uploader.destroy(
            oldBanner.publicId,
            {
              resource_type:
                oldBanner.fileType === "video"
                  ? "video"
                  : "image",
            }
          );
        } catch (err) {
          console.log("Cloudinary delete error:", err);
        }

        await Banner.deleteMany({});
      }

      const fileType = req.file.mimetype.startsWith("video")
        ? "video"
        : "image";

      await Banner.create({
        fileType,
        fileUrl: req.file.path, // Cloudinary URL
        publicId: req.file.filename,
      });

      res.redirect("/admin");
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }
);

module.exports = router;