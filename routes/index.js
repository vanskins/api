var moviesJSON = require('../movies.json');


exports.home = function(req, res){
  var movies = moviesJSON.movies;
  // res.render('home', {
  //   title: "Star wars moviesz",
  //   movies : movies,
  // });
  // movies.map(movie => {
  // 	console.log(movie.title);
  // });
  res.header("Access-Control-Allow-Origin", "*");
    res.json(movies);
};
//movie_single
exports.movie_single = function(req, res){
  var episode_number = req.params.episode_number;
  res.send(`this is the page for episode ${episode_number}`);
};

//notFound
exports.notFound = function(req, res) {
  res.send("This is not the page that you are looking for gok");
};
