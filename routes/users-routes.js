import express from "express";
import { getUser } from "../controllers/users-controller.js";
import { getBookmarks, postBookmark } from "../controllers/bookmarks-controller.js";

const usersRoutes = express.Router();

usersRoutes.route("/:userId").get(getUser);
usersRoutes.route("/:userId/bookmarks").get(getBookmarks).post(postBookmark);

export default usersRoutes;