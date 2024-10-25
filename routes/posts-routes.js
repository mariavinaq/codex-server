import express from "express";
import multer from "multer";
import { getPosts, getPost, postPost } from "../controllers/posts-controller.js";
import { getComments, postComment } from "../controllers/comments-controller.js";

const postsRoutes = express.Router();

const storage = multer.diskStorage({
    destination: "public/media/",
    filename: (_req, file, callback) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        callback(null, uniqueName);
    }
});
const upload = multer({ storage: storage })

postsRoutes.route("/").get(getPosts).post(upload.single("thumbnail"), postPost);
postsRoutes.route("/:postId").get(getPost);
postsRoutes.route("/:postId/comments").get(getComments).post(postComment);

export default postsRoutes;