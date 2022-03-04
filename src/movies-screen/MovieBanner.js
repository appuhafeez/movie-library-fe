import React from "react";
import "./MovieBanner.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const baseURL = "https://image.tmdb.org/t/p/w500";
function MovieBanner({ movie }) {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function combineAll(movieChar) {
    console.log("movie char");
    return movieChar.map(({ name }) => name).join(", ");
  }

  console.log(movie);
  return (
    <div className="container">
      <div className="row main_container">
        <div className="col-sm-3">
          <img
            className="image__div"
            src={`${baseURL}${movie?.poster_path}`}
            alt="movie poster"
          ></img>
        </div>
        <div className="col-sm-9">
          <div className="short_description">
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="row">
              <div className="col-sm-1">
                <CircularProgressbar
                  className="progress_bar"
                  value={movie.vote_average * 10}
                  text={`${movie.vote_average * 10}%`}
                  styles={buildStyles({
                    pathColor: "#009900",
                    textColor: "#009900",
                  })}
                ></CircularProgressbar>
              </div>
              <h1 className="col-sm-2 release_date">{movie?.release_date}</h1>
              <h1 className="col-sm-6 movie_genre">
                {movie.genres && movie.genres.length > 0
                  ? movie.genres
                      .map((movieGenres) => movieGenres.name)
                      .join(", ")
                  : ""}
              </h1>
              <h1 className="col-sm-3 movie_genre">
                Runtime: {movie.runtime} min
              </h1>
            </div>
            <h3>Overview</h3>
            <div className="overview_movie">
              {truncate(movie?.overview || "", 500)}
            </div>
            <h1 className="tag_line">{movie?.tagline}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
