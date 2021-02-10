exports.up = async knex => {
  await knex.schema.createTable("bank_detail", table => {
    table.uuid("id").primary();
    table.uuid("staff_id").references('id').inTable('staff').notNull().onDelete('cascade');;
    table.string("account_name").notNullable();
    table.string("bank_name").notNullable();
    table
      .integer("account_number")
      .notNullable()
      .unique();
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
  return knex.schema.dropTableIfExists("bank_detail");
};
