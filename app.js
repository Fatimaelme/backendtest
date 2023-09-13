var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var cors = require('cors')
var fileUpload = require('express-fileupload')

var indexRouter = require('./routes/index');
const users = require('./routes/users');
const personrouter = require('./routes/persons');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
mongoose.connect('mongodb+srv://fatima:fatima19@cluster0.gaeheaf.mongodb.net/?retryWrites=true&w=majority').then(() =>console.log('db connected'))

app.use('/', indexRouter);
app.use('/users', users);
app.use('/persons', personrouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
