import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMoviesList from "../hooks/useNowPlayingMovieList";
import usePopularMoviesList from "../hooks/usePopularMoviesList";
import useTopRatedMoviesList from "../hooks/useTopRatedMoviesList";
import useUpcomingMoviesList from "../hooks/useUpcomingMoviesList";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  useNowPlayingMoviesList();
  usePopularMoviesList();
  useTopRatedMoviesList();
  useUpcomingMoviesList();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
