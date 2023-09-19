import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ movie }) => {
  if (!movie?.poster_path) return;
  return (
    <div className="w-40 mr-4">
      <img
        className="rounded-lg"
        alt="movie_card"
        src={IMG_CDN_URL + movie?.poster_path}
      />
    </div>
  );
};

export default MovieCards;
