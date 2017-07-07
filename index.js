var express = require('express');
var app = express();

app.set('view engine', 'ejs');
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// import routes from './routes';
//routes

//home
app.get('/', routes.home);
//movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//notFound
app.get('*', routes.notFound);

app.listen(3000, function(){
  console.log('server is running brah.....');
});
