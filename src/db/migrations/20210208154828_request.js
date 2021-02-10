exports.up = async knex => {
  await knex.schema.createTable("request", table => {
    table.uuid("id").primary();
    table.datetime("request_time", { precision: 6 }).defaultTo(knex.fn.now(6));
    table
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table.decimal('amount' ,15,2);
    table.string('request_status').notNullable().defaultTo('pending');
  });
  return true;
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("request");
};
