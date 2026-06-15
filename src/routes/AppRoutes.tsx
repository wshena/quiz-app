import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { GetAllQuizCategory } from "../utils/fetcher";
import Explore from "../pages/Explore";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: async () => {
        //   return await GetAllQuizCategory();
        // },
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
    ],
  },
]);
