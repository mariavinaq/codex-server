import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getBookmarks = async (req, res) => {
    const { userId: userId } = req.params;
    
    try {
        const posts = await knex("posts")
            .join("users", "posts.user_id", "=", "users.id")
            .join("bookmarks", "posts.id", "bookmarks.post_id")
            .where("bookmarks.user_id", userId)
            .select(
                "posts.id",
                "posts.timestamp",
                "posts.title",
                "posts.thumbnail",
                "posts.likes",
                "users.username",
                "users.avatar",
                "bookmarks.timestamp as bookmarked_on",
                "bookmarks.id as bookmarked"
            );

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: `Error receiving bookmarked posts: ${error}` });
    }
};

const postBookmark = async (req, res) => {
    const { post_id, user_id } = req.body;

    try {
        const alreadyBookmarked = await knex("bookmarks")
            .where("post_id", post_id)
            .where("user_id", user_id)
            .first();

        if (alreadyBookmarked) {
            await knex("bookmarks")
                .where("post_id", post_id)
                .where("user_id", user_id)
                .first()
                .del();
            res.status(200).json({ bookmarked: false, message: "Bookmark removed."});
        } else {
            const newBookmark = await knex("bookmarks").insert({
                post_id,
                user_id
            });
            res.status(200).json({ ...newBookmark, bookmarked: true});
        }
    } catch (error) {
    res.status(500).json({ message: `Error adding bookmark: ${error}` });
    }
};

export { getBookmarks, postBookmark };