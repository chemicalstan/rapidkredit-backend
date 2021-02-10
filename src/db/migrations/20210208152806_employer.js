exports.up = async knex => {
  await knex.schema.createTable("employer", table => {
    table.uuid("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("password").notNullable();
    table
      .integer("phone")
      .unique()
      .notNullable();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("employer_image_url");
    table.string("company_image_url");
    table.string("company_name").notNullable();
    table.string("company_employee_api");
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

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("employer");
};
