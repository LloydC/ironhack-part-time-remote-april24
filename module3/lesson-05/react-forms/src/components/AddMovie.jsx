import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
 
function AddMovie({ addNewMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleSubmit = (e) => {
        e.preventDefault(); // prevent the page from reloading

        // Collect the newMovie data
        const newMovie = {
            _id: uuidv4(),
            title,
            director,
            IMDBRating: Number(IMDBRating),
            hasOscars
        }
        // Update the list of movies
        addNewMovie(newMovie)
        setTitle('')
        setDirector('')
        setIMDBRating(5)
        setHasOscars(true)
  } 
 
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
  
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
        />
        
  
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={director} 
            onChange={(e)=> setDirector(e.target.value)}
            
        />
  
        <label>IMDB Rating: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={IMDBRating} 
            onChange={(e)=> setIMDBRating(e.target.value)}
        />
  
        <label>Won Oscars: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={hasOscars} 
            onChange={(e)=> setHasOscars(e.target.checked)}
        />
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}
 
export default AddMovie;