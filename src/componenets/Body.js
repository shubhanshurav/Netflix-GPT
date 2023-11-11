import React from 'react';
import Login from './Login';
import Browse from './Browse';
import StartedPage from './StartedPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NowPlayingMovies from './pages/NowPlayingMovies';
import PopularMovies from './pages/PopularMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import TrendingMovies from './pages/TrendingMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import { useSelector } from 'react-redux';

const Body = () => {

  const movies = useSelector((store) => store.movies);

    const appRouter = createBrowserRouter([
        {path: "/", element: <StartedPage />},
        {path: "/login", element: <Login />},
        { path: "/browse", element: <Browse />},
        { path: "/nowplayingmovies", element: <NowPlayingMovies  title={"Now Playing"} movies={movies.nowPlayingMovies} />},
        { path: "/popularmovies", element: <PopularMovies title={"Popular Movies"} movies={movies.popularMovies} />},
        { path: "/topratedmovies", element: <TopRatedMovies  title={"Top Rated"} movies={movies.topRatedMovies}  />},
        { path: "/trendingmovies", element: <TrendingMovies title={"Trending"} movies={movies.trendingMovies} />},
        { path: "/upcomingmovies", element: <UpcomingMovies title={"Upcoming Movies"} movies={movies.upcomingMovies} />},
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
