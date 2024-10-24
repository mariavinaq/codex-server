import users from "../seed-data/users.js";
import posts from "../seed-data/posts.js";
import comments from "../seed-data/comments.js";

export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert(users);
  await knex("posts").del();
  await knex("posts").insert(posts);
  await knex("comments").del();
  await knex("comments").insert(comments);
};