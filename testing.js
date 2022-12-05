// const { mysql } = require('./options/mysql');
// const { sqlite } = require('./options/sqlite');
// const knexProduct = require('knex')(mysql);
// const knexChat = require('knex')(sqlite);

// knex
//   .from('libros')
//   .where('id', '=', 3)
//   .update({ precio: 9500 })
//   .then(() => {
//     console.log('Actualizado.');
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

/* -------------------------------------------------------------------------- */
/*                                    Crear                                   */
/* -------------------------------------------------------------------------- */

// knex.schema
//   .createTable('libros', (table) => {
//     table.increments('id'), table.string('nombre'), table.integer('precio'), table.integer('stock'), table.string('img');
//   })
//   .then(() => {
//     console.log('todo bien');
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

/* -------------------------------------------------------------------------- */
/*                                   Insert                                   */
/* -------------------------------------------------------------------------- */

// knex('libros')
//   .insert([
//     {
//       nombre: 'El nombre del viento',
//       precio: 7000,
//       stock: 12,
//       img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/a7/90/a790dff70defe5c61b66fd73716b6e30.jpg',
//     },
//     {
//       nombre: 'El temor de un hombre sabio',
//       precio: 8500,
//       stock: 11,
//       img: 'https://www.popularlibros.com/imagenes.webp_grandes/9788401/978840133963.webp',
//     },
//     {
//       nombre: 'Las puertas de piedra',
//       precio: 10000,
//       stock: 14,
//       img: 'http://www.cronicadelasesinodereyes.com/wp-content/uploads/2017/02/las-puertas-de-piedra.jpg',
//     }
//   ])

/* -------------------------------------------------------------------------- */
/*                                  Select                                    */
/* -------------------------------------------------------------------------- */

// knex
//   .from('libros')
//   .select('precio', 'nombre')
// .then((res) => {
//     console.log(res);
//   })

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

/* --------------------------------- WARNING -------------------------------- */
// SI NO ESPECIFICAS .WHERE SE BORRA TODO!!
// knex
//   .from('libros')
//   .where("id", "=", 2)
//   .del()
//   .then(() => {
//     console.log("Borrado con éxito.");
//   })
/* ------------------------------------ - ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

// knex
//   .from('libros')
//   .where("id", "=", 3)
//   .update({precio: 9500})
//   .then(() => {
//     console.log("Actualizado.");
//   })
