import './App.css';
import Navigationbar from "./components/Navbar/Navigationbar";
import Intro from "./components/Intro/Intro";
import MovieList from './components/MovieList/MovieList';
import { useState } from 'react';

const API_URL = 'http://www.omdbapi.com/?apikey=79627f27';

function App() {

  const [movies, setMovies] = useState([])
  const [SearchKey, setSearchKey] = useState('')

  const searchMovie = async () => {
    const response = await fetch(`${API_URL}&s=${SearchKey}`)
    const data = await response.json()

    setMovies(data.Search)

  }

  const onChangeMovie = (e) => {
    const change = e.target.value
    setSearchKey(change)
  }

  return (
    <div className='App-header'>
      <Navigationbar />
      <Intro />
      <MovieList
        SearchKey={SearchKey}
        movies={movies}
        onChangeMovie={onChangeMovie}
        searchMovie={searchMovie}
      />
    </div>
  );
}

export default App;
