 
import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import FilterMovies from "./FilterMovies";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);
 
  const addNewMovie = (newMovie) => {
    // Create a new array
    const updatedMovies = [...movies, newMovie];
    const updatedMoviesData = [...moviesData, newMovie]; // <== ADD

    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData); 
  };

  const filterMovieList = (str) => {
    let filteredMovies;
    
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setMovies(filteredMovies);
  };

  return (
    <div>
        <FilterMovies filterMovies={filterMovieList} />
        <AddMovie addNewMovie={addNewMovie} />
      <h2>Movie List</h2>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;