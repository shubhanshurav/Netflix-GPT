import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import StartedPage from "./pages/StartedPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NowPlayingMovies from "./movie/NowPlayingMovies";
import PopularMovies from "./movie/PopularMovies";
import TopRatedMovies from "./movie/TopRatedMovies";
import TrendingMovies from "./movie/TrendingMovies";
import UpcomingMovies from "./movie/UpcomingMovies";
import { useSelector } from "react-redux";
import WatchPage from "./movie/WatchPage";
import MainContainer from "./MainContainer";
import ErrorPage from "./pages/ErrorPage";

const Body = () => {
  const movies = useSelector((store) => store.movies);

  const appRouter = createBrowserRouter([
    { path: "/", element: <StartedPage /> },
    { path: "/login", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        { path: "/browse", element: <MainContainer /> },
        { path: "watch", element: <WatchPage /> },
        {
          path: "nowplayingmovies",
          element: (
            <NowPlayingMovies
              title={"Now Playing"}
              movies={movies.nowPlayingMovies}
            />
          ),
        },
        {
          path: "popularmovies",
          element: (
            <PopularMovies title={"Popular Movies"} movies={movies.popularMovies} />
          ),
        },
        {
          path: "topratedmovies",
          element: (
            <TopRatedMovies title={"Top Rated"} movies={movies.topRatedMovies} />
          ),
        },
        {
          path: "trendingmovies",
          element: (
            <TrendingMovies title={"Trending"} movies={movies.trendingMovies} />
          ),
        },
        {
          path: "upcomingmovies",
          element: (
            <UpcomingMovies
              title={"Upcoming Movies"}
              movies={movies.upcomingMovies}
            />
          ),
        },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
