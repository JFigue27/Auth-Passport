const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');

// log errors and errorHandlers
const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Body parser
app.use(express.json());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// Catch error 404
app.use(notFoundHandler);

// Manejadores de Errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
