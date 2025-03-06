import {useState, useEffect} from "react";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

// Array that random movie comes from when the user first opens the page
const movieList = ["the mummy", "twilight", "star wars", "sweeney todd", "hercules"];

const randomMovie = movieList[Math.floor(Math.random() * movieList.length)];

// Test to understand how Math.floor() and Math.random() work to generate random movies
console.log(Math.floor(Math.random()))

console.log(randomMovie);

export default function App() {
  // Constant with your API Key
  const apiKey = "c55ec6a2";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}