import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getComments = async (req, res) => {
    const { postId: postId } = req.params;

    try {
        const comment = await knex("comments")
            .join("users", "comments.user_id", "=", "users.id")
            .where("comments.post_id", postId)
            .select(
                "comments.id",
                "comments.comment",
                "comments.timestamp",
                "users.id as user_id",
                "users.username",
                "users.avatar"
            );
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: `Error posting comment: ${error}` });
    }
};

const postComment = async (req, res) => {
    const { postId: postId } = req.params;
    const { comment, post_id = postId, user_id = 1 } = req.body;

    try {
        const newComment = await knex("comments").insert({
            comment,
            post_id,
            user_id
        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(500).json({ message: `Error submitting comment: ${error}` });
    }
};

export { getComments, postComment };