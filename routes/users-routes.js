import express from "express";
import { postBookmark } from "../controllers/bookmarks-controller.js";

const usersRoutes = express.Router();

usersRoutes.route("/bookmarks").post(postBookmark);

export default usersRoutes;