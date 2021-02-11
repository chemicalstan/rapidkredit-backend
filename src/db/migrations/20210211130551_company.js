exports.up = async knex => {
    await knex.schema.createTable("company", table => {
      table.uuid("id").primary();
      table.string("company_name");
      table
        .uuid("employer_id")
        .references("id")
        .inTable("employer")
        .notNull()
        .onDelete("cascade");
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
    return knex.schema.dropTableIfExists("company");
  };
  