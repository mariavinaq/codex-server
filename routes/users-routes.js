import express from "express";
import { getBookmarks, postBookmark } from "../controllers/bookmarks-controller.js";

const usersRoutes = express.Router();

usersRoutes.route("/:userId/bookmarks").get(getBookmarks).post(postBookmark);

export default usersRoutes;