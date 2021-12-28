import React, { Fragment, useState } from "react";
import "./App.css";
import MoviesList from "./components/movie/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      setError(null);
      const responce = await fetch("https://swapi.dev/api/films/");
      if(!responce.status) {
        throw new Error("Something wrong!");
      }

      const data = await responce.json();

  
      const transformedData = data.results.map((movieData) => {
        return {
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
  
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
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

  let content = <p>List is empty</p>;

  if(error) {
    content = <p>{error}</p>;
  }

  if(movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if(isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Data</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>List is empty</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </Fragment>
  );
}

export default App;
