// exports.up = async knex => {
//   await knex.schema.createTable("settlement", table => {
//     table.uuid("id").primary();
//     table
//       .uuid("employer_id")
//       .references("id")
//       .inTable("employer")
//       .notNull()
//       .onDelete("cascade");
//     table
//       .uuid("staff_id")
//       .references("id")
//       .inTable("staff")
//       .notNull()
//       .onDelete("cascade");
//     table.boolean('is_settled').notNullable().defaultTo(false);
//     table.date('payment_due_date').notNullable();
//     table
//       .timestamp("created_at")
//       .notNullable()
//       .defaultTo(knex.fn.now());
//     table
//       .timestamp("updated_at")
//       .notNullable()
//       .defaultTo(knex.fn.now());
//   });
//   return true;
// };

// exports.down = knex => {
//     return knex.schema.dropTableIfExists('settlement');
// };
