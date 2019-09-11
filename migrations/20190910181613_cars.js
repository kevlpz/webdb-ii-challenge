
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('VIN', 17).notNullable().unique();
    tbl.text('Make', 32).notNullable();
    tbl.text('Model', 32).notNullable();
    tbl.integer('Mileage', 6).notNullable();
    tbl.text('Title', 128);
    tbl.text('Transmission', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
