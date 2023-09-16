import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCards key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
