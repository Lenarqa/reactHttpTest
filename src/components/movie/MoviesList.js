import React from "react";
import classes from "./MoviesList.module.css";
import Movie from "./Movie";

const MoviesList = (props) => {
  console.log(props.movies);
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.title}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.releaseDate}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
