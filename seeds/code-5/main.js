import multer from "multer";

const storage = multer.diskStorage({
    destination: "public/media/",
    filename: (_req, file, callback) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        callback(null, uniqueName);
    }
});
const upload = multer({ storage: storage });