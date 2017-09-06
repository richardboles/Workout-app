// Express library
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
//const methodOverride = require('method-override');

const workoutRouter = require('./routes/workouts');

// Create the port
const PORT = process.env.PORT || 3000;

// Start up express
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set up logging
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/workouts', workoutRouter);
app.use('/workouts-edit', workoutRouter);
//app.use(methodOverride('_method'));

//app.get('/', (req, res) => res.render('index', {
//  message: 'Hello you!',
//  subTitle: 'Welcome to the workout',
//  workoutAuthors: []
//}));

app.get('/', (req, res) => {
  res.render('workouts');
});



// Set up a listener on PORT
// Log the message "Server up and listening on port XXXX"
// Log which environment we're in
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
