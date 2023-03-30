import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
      // .then((data) => setData(data.message))
      // .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return (
    <>
    {console.log(data)}
      {data ? data.map((dato, index) => {
        return (
          <>
              <p>{dato.ID}</p>
              <h5>{dato.F_NAME}</h5>
          </>
        )
        
      }) : "Loading..."}
      {movies.map((movie, index) => {
        return (
          <>
            <h1 key={index}>Nombre: {movie.name}</h1>
            <h2 key={index}>Duración: {movie.duration}</h2>
          </>
        );
      })}
    </>
  );
}

export default App;
