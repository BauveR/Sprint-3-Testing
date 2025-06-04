# 🎬 Sprint 3 | Video management tool

## Introduction

This project is part of the IT Academy's Sprint 3 and focuses on building the core logic for a movie management web application. A company in the audiovisual sector has requested this application to help their employees quickly search through a large movie database, as the current process is done manually.

📌​ Key Objectives:
The goal is to implement functions that filter, sort, and analyze the movie dataset while ensuring they pass tests using the Jest framework. You will be responsible for setting up the application's core logic, including all filtering and sorting functionalities.

<br>

## 🔗​ Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/BauveR/Sprint-3-Testing.git

2. Install dependencies:

   ```bash
   npm install
   ```
<br>

### Running Tests

To run the test suite and verify your implementations:

```bash
npm test
```
And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.
<br>

## 🦾 Exercises

### 🟢 Level 1

#### 🦾​ Exercise 1: Get All Directors

**Function:** `getAllDirectors(movies)`

**Description:**  
Return an array containing the names of all directors from the movie dataset.

**Hint:**  
Use the `.map()` method to extract the `director` property from each movie object returning a new array.

**Test Screenshot:**  
✅![Exercise 1 Test](./screenshots/getAllDirectors.png)

---

#### 🦾​ Exercise 2: Get Movies from a Specific Director

**Function:** `getMoviesFromDirector(movies, director)`

**Description:**  
Return an array of movies managed by the specified director.

**Hint:**  
Use the `.filter()` method to select movies where the `director` matches the given name.

**Test Screenshot:**  
✅![Exercise 2 Test](./screenshots/getMoviesFromDirector.png)

---

#### 🦾​ Exercise 3: Calculate Average Score of a Director's Movies

**Function:** `moviesAverageOfDirector(movies, director)`

**Description:**  
Calculate and return the average score of all movies directed by the specified director, parsed and rounded to two decimal places.

**Hint:**  
Use `.filter()` to get the director's movies, then `.reduce()` to sum their scores, and finally divide by the number of movies.

**Test Screenshot:**  
✅![Exercise 3 Test](./screenshots/moviesAverageDirector.png)

---

#### 🦾​ Exercise 4: Alphabetical Order of Movie Titles

**Function:** `orderAlphabetically(movies)`

**Description:**  
Return an array of the first 20 movie titles sorted alphabetically.

**Hint:**  
Use `.map()` to extract titles, 
`.sort()` to sort them, and 
`.slice()` to get the first 20.

**Test Screenshot:**  
✅![Exercise 4 Test](./screenshots/orderAlphabetically.png)

---

#### 🦾​ Exercise 5: Order Movies by Year

**Function:** `orderByYear(movies)`

**Description:**  
Return an array of movies sorted by year in ascending order. If two movies have the same year, sort them alphabetically by title.

**Hint:**  

use the spreed to include into a new array
Use `.sort()` with a custom comparator that first compares years and then titles.

**Test Screenshot:**  
✅![Exercise 5 Test](./screenshots/OrdeyByYear.png)

---

#### 🦾​ Exercise 6: Average Score by Genere

**Function:** `moviesAverageByCategory(movies, genre)`

**Description:**  
Calculate and return the average score of movies in the specified genre, rounded to two decimal places.

**Hint:**  

Use `.filter()` to obtain the movies by genere,
Use `.reduce()` to sum their scores.

**Test Screenshot:**  
✅![Exercise 6 Test](./screenshots/moviesAverageByCategory.png)

---

### 🟡 Level 2

#### 🦾​ Exercise 7: Convert Movie Durations to Minutes

**Function:** `hoursToMinutes(movies)`

**Description:**  
Convert the `duration` property of each movie from a string format (e.g., "2h 34min") to an integer representing the total number of minutes.

**Hint:**  
Use a regular for  to iterate a spread array 
Use `.split()` to create a new array with two positions whith numbers (hour, minutes) then make the operations  and return the total 

**Test Screenshot:**  
✅![Exercise 7 Test](./screenshots/HousToMinutes.png)

---

### 🔴 Level 3

#### 🦾​ Exercise 8: Best Film of the Year

**Function:** `bestFilmOfYear(movies, year)`

**Description:**  
Return the movie with the highest score from the specified year.

**Hint:**  
Use `.filter()` to select movies from the given year, 
then `.sort()` to find the one with the highest score in the spreadind array.

**Test Screenshot:**  
✅![Exercise 8 Test](./screenshots/bestFilmOfTheYear.png)

---

## 📁 Directory Structure

```
S3-Testing-Level-1/
├── src/
│   └── index.js
├── tests/
│   └── films.spec.js
├── screenshots/
│   ├── exercise1.png
│   ├── exercise2.png
│   └── ...
├── package.json
└── README.md
```
## ✨ Author
Project developed as part of a JavaScript and web design learning exercise.