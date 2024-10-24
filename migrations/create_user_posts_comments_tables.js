export function up(knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("username").notNullable();
            table.string("password").notNullable();
            table.string("avatar").notNullable();
        })
        .createTable("posts", (table) => {
            table.increments("id").primary();
            table.timestamp("timestamp").defaultTo(knex.fn.now());
            table.integer("user_id").unsigned().notNullable();
            table.string("title").notNullable();
            table.text("description").notNullable();
            table.string("thumbnail").notNullable();
            table.text("html");
            table.text("css");
            table.text("js");
            table.integer("likes").notNullable().defaultTo(0);
            table
                .foreign("user_id")
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("comments", (table) => {
            table.increments("id").primary();
            table.timestamp("timestamp").defaultTo(knex.fn.now());
            table.integer("post_id").unsigned().notNullable();
            table.integer("user_id").unsigned().notNullable();
            table.text("comment").notNullable();
            table
                .foreign("post_id")
                .references("id")
                .inTable("posts")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table
                .foreign("user_id")
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        });
}

export function down(knex) {
    return knex.schema
        .dropTable("comments")
        .dropTable("posts")
        .dropTable("users");
}