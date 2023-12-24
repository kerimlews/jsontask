import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';

// pages
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PostDetailsPage from './pages/PostDetailsPage';
import PhotosPage from './pages/PhotosPage';

// loaders
import { loader as postsLoader } from './pages/HomePage/loader';
import { loader as postDetailsLoader } from './pages/PostDetailsPage/loader';
import { loader as photosLoader } from './pages/PhotosPage/loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: postsLoader,
        children: [
          {
            path: "posts/:id",
            element: <PostDetailsPage />,
            loader: postDetailsLoader,
          }
        ]
      },
      {
        path: "photos",
        element: <PhotosPage />,
        loader: photosLoader,
      },
    ],
  },
]);


const App = () => <RouterProvider router={router} />

export default App;
