import MovieList from './components/MovieList'
import Spinner from './components/Spinner';
import { useState } from 'react'; // <-- add
import './App.css'
 
function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(true); // <-- add
 
  if (isLoading) {
    return <Spinner />;
  } 
    return (
      <div className="App">
        <MovieList />
      </div>
    );

}

export default App
