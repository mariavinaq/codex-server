import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getUser = async (req, res) => {
    const { userId: userId } = req.params;

    try {
        const user = await knex("users")
            .where("users.id", userId)
            .select(
                "users.username",
                "users.avatar"
            )
            .first();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Error fetching user: ${error}` });
    }
};

export { getUser };