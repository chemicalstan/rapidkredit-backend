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
        .string("phone")
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
      table.timestamps(true, true);
    });
    return true;
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists("users");
  };
  