import React from "react";
import classes from "./MovieList.module.css";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.releaseDate}
        />
      ))}
    </ul>
  );
};

export default MovieList;
