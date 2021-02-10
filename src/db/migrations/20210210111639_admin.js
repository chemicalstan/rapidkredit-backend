exports.up = async knex => {
  await knex.schema.createTable("admin", table => {
    table.uuid("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("password").notNullable();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("image_url");
    table
      .integer("phone")
      .unique()
      .notNullable();
    table
      .boolean("super_power")
      .notNullable()
      .defaultTo(false);
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
  return true;
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("admin");
};
