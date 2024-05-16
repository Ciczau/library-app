import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import BookPage from "./containers/BookPage/BookPage";
import BorrowedBooks from "./containers/BorrowedBooks/BorrowedBooks";
import BookmarkPage from "./containers/BookmarkPage/BookmarkPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/book/:id",
    element: <BookPage />,
  },
  {
    path: "/borrowed",
    element: <BorrowedBooks />,
  },
  {
    path: "/bookmarks",
    element: <BookmarkPage />,
  },
]);
