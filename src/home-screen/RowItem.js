import React, { useState } from "react";
import "./Row.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

function RowItem({ isLargeRow, imageUrl, movie, mediaType }) {
  const [isHovered, setHover] = useState(false);
  const navigate = useNavigate();

  const goToMovie = (path) => {
    navigate(path);
  };

  return (
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
        <div className={`row__info_div ${isLargeRow && "row__info_divLarge"} `}>
          <div className="fad__top"></div>
          <div className="fad__background">
            <div>
              <button className="row__button">
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
  );
}

export default RowItem;
