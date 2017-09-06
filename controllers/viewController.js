module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showWorkouts(req, res) {
    res.render('workouts/workouts-index', {
     data:res.locals.workouts,
    });
  },

  showOne(req, res) {
    res.render('workouts/workouts-single', {
    data:res.locals.workouts,
    });
  },

  showAddForm(req, res) {
    res.render('workouts/workouts-add');
  },

  showEditform(req, res) {
    res.render('workouts/workouts-add', {
      data: res.locals.workout,
    });
  },

  handleCreate(req, res) {
    res.redirect('/workouts');
  },

  handleUpdate(req, res) {
    res.redirect(`/workouts/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/workouts');
  },
};
