import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const PostComment = async (req, res) => {
    const { id: postId } = req.params;
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

export { PostComment };