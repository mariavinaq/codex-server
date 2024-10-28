import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getUser = async (req, res) => {
    const { userId: userId } = req.params;

    try {
        const user = await knex("users")
            .where("users.id", userId)
            .select(
                "users.id",
                "users.username",
                "users.avatar"
            )
            .first();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Error fetching user: ${error}` });
    }
};

const getUserPosts = async (req, res) => {
    const { userId: userId } = req.params;
    
    try {
        const posts = await knex("posts")
            .join("users", "posts.user_id", "=", "users.id")
            .where("posts.user_id", userId)
            .select(
                "posts.id",
                "posts.timestamp",
                "posts.title",
                "posts.thumbnail",
                "posts.likes",
                "users.id as user_id",
                "users.username",
                "users.avatar",
            );

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: `Error receiving user posts: ${error}` });
    }
}

export { getUser, getUserPosts };