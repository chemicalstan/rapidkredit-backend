exports.up = async knex => {
  await knex.schema.createTable("requests", table => {
    table.uuid("id").primary();
    table.uuid('user_id').references('id').inTable('users').notNullable().onDelete('cascade');;
    table.date("request_date").notNullable().defaultTo(knex.fn.now(6));
    table.date("settlement_date").notNullable();
    table.uuid("company_id").references('id').inTable('companies').notNullable().onDelete('cascade');
    table.decimal('amount' ,15,2);
    table.string('request_status').notNullable().defaultTo('requested');
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
  return knex.schema.dropTableIfExists("request");
};
