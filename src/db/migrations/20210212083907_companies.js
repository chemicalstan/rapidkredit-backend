exports.up = async knex => {
  await knex.schema.createTable("companies", table => {
    table.uuid("id").primary();
    table.string("company_name").notNullable();
    table.string('company_email').notNullable();
    table
      .uuid("employer_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("cascade");
    table.text("about_company");
    table.json('company_address');
    table.timestamps(true, true);
  });
  return true;
};

exports.down = async knex => {
  return knex.schema.dropTableIfExists("companies");
};
