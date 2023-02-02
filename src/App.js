import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import LoginPhone from "./Components/LoginPhone";
import Profile from "./Components/Profile";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import RentForm from "./Components/RentForm";
import Feed from "./Components/Feed";
import LoginPhoneNew from "./Components/LoginPhoneNew/LoginPhoneNew";
import "./App.css";
import Landing from "./Pages/Landing";

function App() {
  const [user, loading, error] = useAuthState(getAuth());
  useEffect(() => {
    if (loading) {
      console.log("Loading");
    } else if (error) {
      console.log(error);
    } else if (user) {
      console.log(user);
    }
  }, [loading, error, user]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login/phone",
      element: <LoginPhone />,
    },
    {
      path: "/login/phone/new",
      element: <LoginPhoneNew />,
    },
    {
      path: "/profile",
      element: user ? <Profile user={user} /> : <Login />,
    },
    {
      path: "/rent",
      element: <RentForm />,
    },
    {
      path: "/feed",
      element: <Feed />,
    },
  ]);

  return (
    <>
      <Navbar user={user} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
