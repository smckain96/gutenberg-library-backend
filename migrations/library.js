
exports.up = function(knex, Promise) {
  return knex.schema.createTable('library', function(table){
    table.increments();
    table.string('user_id');
    table.string('text_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('library');
};
