import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieBanner from "./MovieBanner";
import axios from "../config/axios";
import "./movie.css";

const API_KEY = process.env.REACT_APP_TMDB_CLIENT_ID;

function Movie({ type }) {
  let params = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let fetchUrl = `/movie/${params.movieId}?api_key=${API_KEY}&language=en-US`;
      if (type === "tv") {
        fetchUrl = `/tv/${params.movieId}?api_key=${API_KEY}&language=en-US`;
      }
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      console.log(request);
      return request;
    }
    fetchData();
  }, [params.movieId]);

  //console.log(movie);
  return (
    <div
      className="background_div"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
              "${process.env.REACT_APP_TMDB_IMG_URL}/${movie?.backdrop_path}"
          )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="gradient_view">
        <div className="movie_poster_div">Image : {params.movieId}</div>
        <MovieBanner
          key={`${params.movieId}`}
          movie={movie}
          apiKey={`${API_KEY}`}
          isTvSeries={type === "tv" ? true : false}
        />
      </div>
    </div>
  );
}

export default Movie;
