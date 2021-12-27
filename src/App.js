import React, {Fragment} from 'react';
import './App.css';
import MovieList from './components/movie/MovieList';

const DUMMY_MOVIES = [
  {
    id: 1,
    title: "Some Movie 1",
    openingText: "Some movie opening text",
    releaseDate: "2021-05-19"
  },
  {
    id: 2,
    title: "Some Movie 2",
    openingText: "Some movie opening text",
    releaseDate: "2021-05-19"
  },
  {
    id: 3,
    title: "Some Movie 3",
    openingText: "Some movie opening text",
    releaseDate: "2021-05-19"
  }
]

function App() {
  return (
    <Fragment>
      <section>
        <button>Fetch Data</button>
      </section>
      <section>
        <MovieList movies={DUMMY_MOVIES}/>
      </section>
    </Fragment>
  );
}

export default App;
