import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesInTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Assume as a movie recommendation system and suggest some good movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies comma seperated like the example result given head Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults?.choices) {
    }
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");
    const promiseArrays = gptMovies.map((movie) => searchMoviesInTmdb(movie));
    const tmdbResults = await Promise.all(promiseArrays);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12 md:w-1/2 w-full mx-4 md:mx-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-3 m-4 col-span-9 rounded-lg"
          placeholder={lang[language].gptSearchPlaceholder}
        ></input>
        <button
          className="bg-red-600 text-white p-3 m-4 col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
