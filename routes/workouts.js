// Bring in express
const express = require('express');
const workout = require('../controllers/workoutController');
const views = require('../controllers/viewController');

// Invoke the Router
const workoutRouter = express.Router();

// List your routes in order of most specific to most general
//workoutRouter.get('/:id/edit', workout.getOne, views.shoowEditForm, views.show404);

//workoutRouter.get('/new', workout.showAddForm);

//workoutRouter.route('/:id')

workoutRouter.route('/')
  .get(workout.index, views.showWorkouts, views.show404)
  .post(workout.create, views.handleCreate, views.show406)

  .get(workout.getOne, views.showOne, views.show404)
  .put(workout.update, views.handleUpdate, views.show406)
  .delete(workout.destroy, views.handleDelete, views.show404);

// Export the workoutRouter
module.exports = workoutRouter;
