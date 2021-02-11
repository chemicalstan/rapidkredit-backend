exports.up = async knex => {
  await knex.schema.createTable("company_staff", table => {
    table.uuid("id").primary();
    table
      .uuid("company_id")
      .references("id")
      .inTable("company")
      .notNull()
      .onDelete("cascade");
    table
      .uuid("staff_id")
      .references("id")
      .inTable("staff")
      .notNull()
      .onDelete("cascade");
    table.string("staff_role").notNullable();
    table.decimal("staff_salary", 15, 2).notNullable();
    table
      .integer("request_count")
      .notNullable()
      .defaultTo(0);
    table.decimal("daily_pay", 15, 2);
    table
      .integer("days_worked_for")
      .notNullable()
      .defaultTo(0);
    table.json("bank_details");
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

exports.down = async knex => {
  return knex.schema.dropTableIfExists("company_staff");
};
