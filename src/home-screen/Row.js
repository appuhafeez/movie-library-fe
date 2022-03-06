import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import "./Row.css";
import RowItem from "./RowItem";

const baseURL = process.env.REACT_APP_TMDB_IMG_URL;

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

function Row({ title, fetchUrl, isLargeRow, mediaType }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code which runs on specific conditon

  const contentWrapper = React.useRef(null);

  useEffect(() => {
    // if [], run once when row loads, if variable is added it runs whenever it changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="scroll__buttons_div">
        <button
          className="scroll__buttons"
          onClick={() => {
            sideScroll(contentWrapper.current, 10, 200, -10);
          }}
        >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div className="row__posters" ref={contentWrapper}>
          {/* row posters */}

          {movies.map((movie) => (
            <RowItem
              key={movie.id}
              isLargeRow={isLargeRow}
              imageUrl={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              movie={movie}
              mediaType={mediaType !== undefined ? mediaType : movie.media_type}
            />
          ))}
        </div>
        <button
          className="scroll__buttons"
          onClick={() => {
            sideScroll(contentWrapper.current, 10, 200, 10);
          }}
        >
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Row;
