exports.up = async knex => {
  await knex.schema.alterTable("staff", table => {
    table.string("image_url").alter().after('phone');
    table
      .string("country")
      .notNullable()
      .alter();
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("staff");
};
