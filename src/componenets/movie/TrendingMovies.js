import React from "react";
import MovieCard from "../movie/MovieCard";
import { Link } from "react-router-dom";
import { BG_URL } from "../../utils/constants";

const TrendingMovies = ({ title, movies }) => {
  //    console.log(movies);

  return (
    <div
      className="h-fit object-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BG_URL})`,
      }}
    >
      <div className="px-6 md:px-8 pt-[20%] md:pt-[6%] pb-0 md:pb-52">
        <h1 className="text-lg md:text-2xl text-white py-3 border-b-4 border-red-600 w-fit mb-4">
          {title}{" "}
        </h1>
        <div className="flex">
          <div className="grid grid-cols-2 md:grid-cols-5 bg-black bg-opacity-50 px-5 py-10 m-auto gap-4 justify-around md:gap-10 w-full">
            {movies &&
              movies?.map((movie) => (
                <Link key={movie.id} to={"/watch?v=" + movie.id}>
                  <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
