import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const deleteImage = async (URL) => {
  try {
    const publicId = URL.substring(
      URL.lastIndexOf("/") + 1,
      URL.lastIndexOf(".")
    );
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === "ok") {
      console.log("Image deleted successfully:", result);
    } else {
      console.error("Image deletion failed:", result);
    }
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};
