import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMoviesList from "../hooks/useNowPlayingMovieList";
import usePopularMoviesList from "../hooks/usePopularMoviesList";
import useTopRatedMoviesList from "../hooks/useTopRatedMoviesList";
import useUpcomingMoviesList from "../hooks/useUpcomingMoviesList";

const Browse = () => {
  useNowPlayingMoviesList();
  usePopularMoviesList();
  useTopRatedMoviesList();
  useUpcomingMoviesList();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
