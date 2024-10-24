import express from "express";
import { getPosts, getPost, postPost } from "../controllers/posts-controller.js";
import multer from "multer";

const postsRoutes = express.Router();

const storage = multer.diskStorage({
    destination: "public/images/",
    filename: (_req, file, callback) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        callback(null, uniqueName);
    }
});
const upload = multer({ storage: storage })

postsRoutes.route("/").get(getPosts).post(upload.single("thumbnail"), postPost);
postsRoutes.route("/:id").get(getPost);

export default postsRoutes;