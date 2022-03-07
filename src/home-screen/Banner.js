import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import requests from "./../util/request";
import "./Banner.css";
import TrailerPopup from "../common/TrailerPopup";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const childRef = useRef();

  const openTrailer = (movie) => {
    console.log(movie);
    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        console.log(new URL(url).search);
        const urlParams = new URLSearchParams(new URL(url).search).get("v");
        console.log(urlParams);
        childRef.current.handleToOpenTrailer(urlParams);
      })
      .catch((error) => {
        console.log(error);
        childRef.current.handleToOpenTrailer("u3VTKvdAuIY");
      });
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(`banner movie ${movie}`);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const goToMovie = (path) => {
    navigate(path);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "${process.env.REACT_APP_TMDB_IMG_URL}/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/*title*/}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => {
              openTrailer(movie);
            }}
          >
            <i className="fa fa-play"></i> Trailer
          </button>
          <button
            className="banner__button"
            onClick={() => goToMovie(`/tv/${movie.id}`)}
          >
            <i className="fa fa-info-circle"></i> Details
          </button>
        </div>
        {/*div > 2 buttons */}
        <h1 className="banner__description">
          {truncate(movie?.overview || "", 150)}
        </h1>
        {/*description*/}
      </div>
      <div className="banner--fadeBottom"></div>
      <TrailerPopup ref={childRef}></TrailerPopup>
    </header>
  );
}

export default Banner;
