const Knex = require('knex');
const { mysql } = require('../options/mysql');
const { sqlite } = require('../options/sqlite');

/* ----------------------------- Tabla Productos ---------------------------- */
const tableProducts = Knex.schema(mysql)
  .createTable('libros', (table) => {
    table.increments('id'), table.string('nombre'), table.integer('precio'), table.integer('stock'), table.string('img');
  })
  .then(() => {
    console.log('Tabla creada con éxito.');
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    Knex.destroy();
  });

  /* ------------------------------- Tabla Chat ------------------------------- */
const tableChat = Knex(sqlite)
  .createTable('libros', (table) => {
    table.increments('id'), table.string('email'), table.string('mensaje'), table.string('fecha');
  })
  .then(() => {
    console.log('Tabla creada con éxito.');
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    Knex.destroy();
  });

module.exports = { tableChat, tableProducts };
