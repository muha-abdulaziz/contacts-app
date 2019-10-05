const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const configValidatore = require('./api/utils/configValidatore');

// verify config vars
configValidatore();

// Express App
const app = express();

// Routes
const routes = require('./api/routes');

// Middlewares

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// Routes
app.use('/', routes);

// 500 internal server error handler
app.use((err, _req, res, next) => {
  if (err.statusCode === 404) return next();
  res.status(500).json({
    // Never leak the stack trace of the err if running in production mode
    err: process.env.NODE_ENV === 'production' ? null : err,
    msg: '500 Internal Server Error',
    data: null,
  });
});

// 404 error handler
app.use((_req, res) => {
  res.status(404).json({
    err: null,
    msg: '404 Not Found',
    data: null,
  });
});

module.exports = app;
