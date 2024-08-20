import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSurffix = Date.now() + "-" + Math.round(Math.rendom() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSurffix);
  },
});

export const upload = multer({ storage });
