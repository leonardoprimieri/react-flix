exports.up = function (knex) {
  return knex.schema.createTable("videos", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("url").notNullable();
    table.string("channel").notNullable();
    table.string("category_name").notNullable();

    table.foreign("category_name").references("name").inTable("categories");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("videos");
};
