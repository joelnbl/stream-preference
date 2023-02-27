import {useState, useEffect} from 'react';
import { getMovies } from './api';
import NavbarScroller from './components/NavbarScroller';

interface MovieGenre {
  id: number;
  name: string;
}

function App() {
  const [movies, setMovies] = useState<[MovieGenre]>([{id: 0, name: ''}]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesRes = await getMovies();
      setMovies(moviesRes);
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <NavbarScroller />
      {movies.map(movie => {
        return (
          <h1>{movie?.name} {movie?.id}</h1>
        )
      })}
    </div>
  );
}

export default App;
