
const workoutDB = require('../models/workoutDB');

module.exports = {

  //Create a blank Quote and set it in res.locals
  makeBlankQuote(req, res) {
    res.json({
      id:         null,
      content:    null,
      author:     null,
      genre_type: null,
    });
  },

  // Middleware function:

  index(req, res, next) {
    workoutDB.findAll()
      .then((workouts) => {
        res.locals.workouts = workouts;
        next();
})
      .catch(err => next(err));
  },

   // Get a quote from the DB and set it in res.locals

  getOne(req, res, next) {
    workoutDB.findById(req.params.id)
      .then((workouts) => {
        res.locals.workouts = workouts;
        next();
      })
      .catch(err => next(err));
  },

   // Create Middleware:
   // Get quote data from the front-end and set it in the DB
   // Sets the results of the insertion into res.locals.quote

  create(req, res, next) {
    workoutDB.save(req.body)
      .then((workouts) => {
        res.locals.workouts = workouts;
        next();
      })
      .catch(err => next(err));
  },

   // Update Middleware:
   // Get quote data from the DB;
   // Merge the data from the front-end;
   // Set it in the DB;

  update(req, res, next) {
    workoutDB.update(req.body)
      .then((workouts) => {
        res.locals.workouts = workouts;
        next();
      })
      .catch(err => next(err));
  },

   // Destroy the quote at this id

  destroy(req, res, next) {
    workoutDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

  // Show a blank HTML form

  showQuoteForm: (req, res) => {
    res.json({message: 'I’m the HTML form for new quotes. I post to /workouts'});
  },
};
