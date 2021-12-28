import React, { Fragment, useState } from "react";
import "./App.css";
import MoviesList from "./components/movie/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const responce = await fetch("https://swapi.dev/api/films/");
    const data = await responce.json();

    const transformedData = data.results.map((movieData) => {
      return {
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    setMovies(transformedData);
    setIsLoading(false);

    // .then((responce) => {
    //   return responce.json();
    // })
    // .then((data) => {
    //   const transformedData = data.results.map((movieData) => {
    //     return {
    //       title: movieData.title,
    //       openingText: movieData.opening_crawl,
    //       releaseDate: movieData.release_date,
    //     };
    //   });
    //   setMovies(transformedData);
    // };
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Data</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>List is empty</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
}

export default App;
