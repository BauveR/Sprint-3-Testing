// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  return array.map((movie) => movie.director);

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  return array.filter((movies) => movies.director === director);
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let filter = array.filter((movies) => movies.director === director);
  let average = filter.reduce(function (sum, movie) {
          return sum + movie.score;
      }, 0) / filter.length;
  
      return parseFloat(average.toFixed(2))
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let titles = array.map((movie)=> movie.title);
  let sorted = titles.sort((a,b)=> a.localeCompare (b));
  return  sorted.slice(0,20);
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let sorted = [...array].sort((a,b) => a.year - b.year || a.title.localeCompare (b.title));
  return sorted;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genere) {




}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {


}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
