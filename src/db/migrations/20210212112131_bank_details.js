exports.up = async knex => {
  await knex.schema.createTable("bank_details", table => {
    table.uuid("id").primary();
    table
      .uuid("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("cascade");
    table.string("account_name").notNullable();
    table.string("bank_name").notNullable();
    table
      .integer("account_number")
      .notNullable()
      .unique();
    table.timestamps(true, true);
  });
  return true;
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("bank_details");
};
