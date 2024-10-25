import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const postBookmark = async (req, res) => {
    const { post_id, user_id = 1 } = req.body;

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
            res.status(200).json({ message: "Bookmark removed."});
        } else {
            const newBookmark = await knex("bookmarks").insert({
                post_id,
                user_id
            });
            res.status(200).json(newBookmark);
        }
    } catch (error) {
    res.status(500).json({ message: `Error adding bookmark: ${error}` });
    }
};

export { postBookmark };