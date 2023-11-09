import React from 'react';
import Login from './Login';
import Browse from './Browse';
import StartedPage from './StartedPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <StartedPage />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
