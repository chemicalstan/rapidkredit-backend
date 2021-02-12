exports.up = async knex => {
    await knex.schema.createTable("users", table => {
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
        .notNullable()
        .unique();
      table
        .boolean("is_active")
        .notNullable()
        .defaultTo(true);
      table
        .boolean("is_verified")
        .notNullable()
        .defaultTo(false);
      table
        .boolean("is_staff")
        .notNullable()
        .defaultTo(false);
      table
        .boolean("is_employer")
        .notNullable()
        .defaultTo(false);
      table
        .boolean("is_admin")
        .notNullable()
        .defaultTo(false);
      table.string("country").notNullable();
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
    return knex.schema.dropTableIfExists("staff");
  };
  