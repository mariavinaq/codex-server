import express from "express";
import { getPosts, getPost } from "../controllers/posts-controller.js";

const postsRoutes = express.Router();

postsRoutes.route("/").get(getPosts);
postsRoutes.route("/:id").get(getPost);

export default postsRoutes;