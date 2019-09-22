var movies = [
  {
    title: "The GodFather",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Pulp Fiction",
    hasWatched: true,
    rating: 4.5
  },
  {
    title: "The Devil's Advocate",
    hasWatched: true,
    rating: 4.8
  }
]

movies.forEach(function(movie){
  console.log(buildString(movie));
});

function buildString(movie){
  var result = "You have ";
  if (movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars.";
  return result;
}