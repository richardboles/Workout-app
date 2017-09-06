const pgp      = require('pg-promise')();
const dbConfig = require('../db/config');


// execute pgp with our db config, so a connection is made.
const db = pgp(dbConfig);

// export our collection of functions
module.exports = {

  findAll() {
    return db.many(`
      SELECT *
        FROM workouts
    ORDER BY id
    `);
  },


  findById(id) {
    return db.one(`
      SELECT *
        FROM workouts
       WHERE id = $1
    `, id);
  },

  save(workouts) {
    console.log(workouts);
    return db.one(`
      INSERT INTO workouts
      RETURNING *
    `, workouts);
  },

  update(workouts) {
    return db.one(`
      UPDATE workouts
      SET
      WHERE id = $/id/
      RETURNING *
    `, workouts);
  },

  destroy(id) {
    return db.none(`
      DELETE
        FROM workouts
       WHERE id = $1
    `, id);
  },
};
