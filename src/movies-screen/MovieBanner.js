import React from "react";
import "./MovieBanner.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const baseURL = process.env.REACT_APP_TMDB_IMG_URL;
function MovieBanner({ movie, isTvSeries }) {
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
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
              <div className="row">
                <div className="col-4 progress_bar">
                  <CircularProgressbar
                    value={movie.vote_average * 10}
                    text={`${movie.vote_average * 10}%`}
                    styles={buildStyles({
                      pathColor: "#009900",
                      textColor: "#009900",
                      textSize: "30px",
                      pathTransitionDuration: "0.7",
                    })}
                  ></CircularProgressbar>
                </div>
                <div className="col-8">
                  <h1 className="release_date">
                    {isTvSeries
                      ? `Initial release date:  ${movie?.first_air_date}`
                      : `Release date: ${movie?.release_date}`}
                  </h1>
                </div>
              </div>
              <div className="row">
                <h1 className="col-sm-6 movie_genre">
                  {movie.genres && movie.genres.length > 0
                    ? movie.genres
                        .map((movieGenres) => movieGenres.name)
                        .join(", ")
                    : ""}
                </h1>
                <h1 className="col-sm-6 movie_genre">
                  {isTvSeries
                    ? `Number of seasons: ${movie?.number_of_seasons}`
                    : `Runtime: ${movie.runtime} min`}
                </h1>
              </div>
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
