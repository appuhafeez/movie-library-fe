import React, { useRef, useState } from "react";
import "./Row.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";
import TrailerPopup from "../common/TrailerPopup";
import movieTrailer from "movie-trailer";

function RowItem({ isLargeRow, imageUrl, movie, mediaType }) {
  const [isHovered, setHover] = useState(false);
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
    setHover(false);
    console.log(isHovered);
  };

  const goToMovie = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`row__element_main ${isLargeRow && "row__elementLarge_main"} `}
    >
      <div
        className={`row__element ${isLargeRow && "row__elementLarge"} `}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(
            "${imageUrl}"
        )`,
        }}
      >
        {/*<img
        key={movie.id}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={imageUrl}
        alt={movie.name}
      />*/}
        {isHovered && (
          <div
            className={`row__info_div ${isLargeRow && "row__info_divLarge"} `}
          >
            <div className="fad__top"></div>
            <div className="fad__background">
              <div>
                <button
                  className="row__button"
                  onClick={() => {
                    openTrailer(movie);
                    setHover(false);
                  }}
                >
                  <i className="fa fa-play"></i> Trailer
                </button>
                <button
                  className="row__button"
                  onClick={() => goToMovie(`/${mediaType}/${movie.id}`)}
                >
                  <i className="fa fa-info-circle"></i> Details
                </button>
              </div>
              <h1 className="row__header">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
            </div>
          </div>
        )}
      </div>
      <TrailerPopup ref={childRef}></TrailerPopup>
    </div>
  );
}

export default RowItem;
