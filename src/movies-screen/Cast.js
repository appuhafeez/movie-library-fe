import React from "react";
import "./Cast.css";

function Cast({ castDetails }) {
  //console.log(castDetails);
  function gotoActorPage() {
    console.log(castDetails);
  }
  return (
    <div onClick={gotoActorPage} className="cast_main_div">
      {castDetails && (
        <div>
          <img
            className="img_style"
            alt={castDetails.name}
            src={`${process.env.REACT_APP_TMDB_IMG_URL}/${castDetails.profile_path}`}
          ></img>
          <h1 className="original_name">{castDetails.name}</h1>
          <h1 className="char_name">as {castDetails.character}</h1>
        </div>
      )}
    </div>
  );
}

export default Cast;
