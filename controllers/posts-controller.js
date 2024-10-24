import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getPosts = async (_req, res) => {
    try {
        const posts = await knex("posts")
            .join("users", "posts.user_id", "=", "users.id")
            .select(
                "posts.id",
                "posts.title",
                "posts.thumbnail",
                "users.username",
                "users.avatar"
            );
        res.status(200).json(posts);
    } catch {
        res.status(500).json({ message: `Error receiving posts: ${error}` });
    }
};

const getPost = async (req, res) => {
    const { id: postId } = req.params;

    try {
        const post = await knex("posts")
            .join("users", "posts.user_id", "=", "users.id")
            .where("posts.id", postId)
            .select(
                "posts.id",
                "posts.title",
                "posts.description",
                "posts.thumbnail",
                "posts.html",
                "posts.css",
                "posts.js",
                "posts.likes",
                "posts.timestamp",
                "users.username as post_username",
                "users.avatar as post_avatar"
            )
            .first();

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        // const comments = await knex("comments")
        //     .join("users", "comments.user_id", "=", "users.id")
        //     .where("comments.post_id", postId)
        //     .select(
        //         "comments.id",
        //         "comments.comment",
        //         "comments.timestamp",
        //         "users.username as comment_username",
        //         "users.avatar as comment_avatar"
        //     );

        // const postWithComments = {
        //     ...post,
        //     comments
        // }
        // res.status(200).json(postWithComments);
        res.status(200).json(post);
    } catch {
        res.status(500).json({ message: `Error submitting post: ${error}` });
    }
};

const postPost = async (req, res) => {
    const { title, description, html, css, js, thumbnail = `/images/${req.file.filename}`, user_id = 1, likes = 0 } = req.body;
    try {
        const newPost = await knex("posts").insert({
            title,
            description,
            html,
            css,
            js,
            thumbnail,
            user_id,
        });
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ message: `Error submitting post: ${error}` });
    }
};

export { getPosts, getPost, postPost };