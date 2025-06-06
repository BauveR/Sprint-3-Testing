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

 return [...array].sort((a,b) => a.year - b.year || a.title.localeCompare (b.title));


}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genere) {

  let filter = array.filter((movies) => movies.genre.includes(genere));
  let average = filter.reduce(function (sum, movie) {
          return sum + movie.score;
      }, 0) / filter.length;
  
      return parseFloat(average.toFixed(2))

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

let newAray = [];

for(let i = 0; i < array.length; i++){
  let movie ={...array[i]}
  let duration= movie.duration.split(" ");
  if (duration.length == 2){

    let hours = parseInt(duration[0]);
    let minutes = parseInt(duration[1]);
    let total = (hours * 60) + minutes;
    movie.duration = total; 

  } else {
    let hours = parseInt(duration[0]);
    let total =  (hours * 60);
    movie.duration = total;
  }
  newAray.push(movie);
}
return newAray;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

movieYear = array.filter((movie) => movie.year === year);
let sorted = [...movieYear].sort((a,b) => a.score - b.score);

return [sorted[sorted.length -1]];

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
