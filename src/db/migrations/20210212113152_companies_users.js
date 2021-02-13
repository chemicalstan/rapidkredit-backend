exports.up = async knex => {
    await knex.schema.createTable("companies_users", table => {
      table.uuid("id").primary();
      table
        .uuid("company_id")
        .references("id")
        .inTable("companies")
        .notNullable()
        .onDelete("cascade");
      table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete("cascade");
      table.string("user_role");
      table.decimal("monthly_pay", 15, 2).notNullable();
      table.decimal("daily_pay", 15, 2).notNullable();
      table
        .integer("days_worked_for")
        .notNullable()
        .defaultTo(0);
      table
        .integer("user_loan_count")
        .notNullable()
        .defaultsTo(0);
      table.timestamps(true, true);
    });
    return true;
  };
  
  exports.down = function(knex) {
    return knex.dropTableIfExists("companies_users");
  };
  