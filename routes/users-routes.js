import express from "express";
import { getUser, getUserPosts } from "../controllers/users-controller.js";
import { getBookmarks, postBookmark } from "../controllers/bookmarks-controller.js";

const usersRoutes = express.Router();

usersRoutes.route("/:userId").get(getUser);
usersRoutes.route("/:userId/posts").get(getUserPosts);
usersRoutes.route("/:userId/bookmarks").get(getBookmarks).post(postBookmark);

export default usersRoutes;