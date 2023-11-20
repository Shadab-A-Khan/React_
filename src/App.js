import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/Grocery.js"));
import UserContext from "../utils/UserContext.js";
import { Provider } from "react-redux"; //provids the appStore to our react application (bridge betwn redux-react)
import appStore from "../utils/AppStore.js";
import Cart from "./components/Cart.js";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = "";
    setUserName(data);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading...</h1>}>
      //       {" "}
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
