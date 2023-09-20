import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((movie) => movie.key === "Trailer");
    const movieTrailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
