import { useState } from "react";
import moviesData from '../movies-data.json';
import MovieCard from "./MovieCard";

function MovieList(){
    const [movies, setMovies] = useState(moviesData)
    const [showMovies, setShowMovies] = useState(true);

    const updateMovies = (movieId) => {
        // remove a specific movie from state variable 'movies'
        //1. retrieve all movies except the one with movieId value

        const newList = movies.filter(movie => movie._id !== movieId);
        console.log('newList', newList);
        //2. update state variable movies
        setMovies(newList);
    }

    const toggleShowMovies = () => {
        setShowMovies(!showMovies); // !boolean -> opposite value 
    };

    return(
        <div>
             <h1>Movies List</h1>

             <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

            { showMovies && movies.map(movie => {
                return <MovieCard key={movie._id} movie={movie} updateMovies={updateMovies}/>
            })}
        </div>
    )
}

export default MovieList;