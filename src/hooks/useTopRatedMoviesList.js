import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMoviesList = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  const getTopRatedMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMoviesList();
  }, []);
};

export default useTopRatedMoviesList;
