import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs on specific conditon

  useEffect(() => {
    // if [], run once when row loads, if variable is added it runs whenever it changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* content posters */}
    </div>
  );
}

export default Row;
