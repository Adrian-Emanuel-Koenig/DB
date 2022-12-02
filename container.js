const Knex = require('knex');

class Contenedor {
  constructor(config, table) {
    this.Knex = Knex(config);
    this.table = table;
  }

  async save(product) {
    return this.Knex(this.table)
      .insert(product)
      .then(() => {
        console.log('Actualizado.');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Knex.destroy();
      });
  }

  async getAll() {
    return this.Knex
      .from(this.table)
      .select('*')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Knex.destroy();
      });
  }

  async getById(id) {
    return this.Knex
      .from(this.table)
      .where('id', '=', id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Knex.destroy();
      });
  }

  async deleteById(id) {
    return this.Knex
      .from(this.table)
      .where('id', '=', id)
      .del()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Knex.destroy();
      });
  }

  async deleteAll() {
    return this.Knex
    .from(this.table)
    .del()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      Knex.destroy();
    });
  }
}

module.exports = Contenedor;
