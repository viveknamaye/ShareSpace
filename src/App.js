import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import LoginPhone from "./Components/LoginPhone";
import Profile from "./Components/Profile";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

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
      element: <></>,
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
      path: "/profile",
      element: user ? <Profile user={user} /> : <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
