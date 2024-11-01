import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getPosts = async (_req, res) => {
    try {
        const posts = await knex("posts")
            .join("users", "posts.user_id", "=", "users.id")
            .leftJoin("bookmarks", function () {
                this.on("posts.id", "=", "bookmarks.post_id")
                  .andOn("bookmarks.user_id", "=", 1); 
              })
            .select(
                "posts.id",
                "posts.timestamp",
                "posts.title",
                "posts.thumbnail",
                "posts.likes",
                "users.id as user_id",
                "users.username",
                "users.avatar",
                "bookmarks.id as bookmarked"
            );

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: `Error receiving posts: ${error}` });
    }
};

const getPost = async (req, res) => {
    const { postId: postId } = req.params;

    try {
        const post = await knex("posts")
            .join("users", "posts.user_id", "=", "users.id")
            .leftJoin("bookmarks", function () {
                this.on("posts.id", "=", "bookmarks.post_id")
                  .andOn("bookmarks.user_id", "=", 1); 
              })
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
                "users.id as user_id",
                "users.username",
                "users.avatar",
                "bookmarks.id as bookmarked"
            )
            .first();

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: `Error submitting post: ${error}` });
    }
};

const postPost = async (req, res) => {
    const { title, description, html, css, js, thumbnail = `/media/${req.file.filename}`, user_id = 1, likes = 0 } = req.body;
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

const putLike = async (req, res) => {
    const { postId: postId } = req.params;
    try {
        await knex("posts")
            .where("id", postId)
            .increment("likes", 1);

        const post = await knex("posts")
            .where("posts.id", postId)
            .first();
        
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: `Error liking post: ${error}` });
    }
}

export { getPosts, getPost, postPost, putLike };