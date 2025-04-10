import { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import Body from "./Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About.js";
import Contact from "./contact.js";
import Error from "./error.js";
import { Link } from "react-router-dom";
import RestaurantMenu from "./restaurant .js";
import useOnlineStatus from "./useonilneStatus.js";
import UserContext from "../utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import { useSelector } from "react-redux";
import Cart from "./cart.js";
import Header from "./header.js";
const AppLayout = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const data = {
      name: "Ankit $ingh",
    };
    setUserData(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userData, setUserData }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
