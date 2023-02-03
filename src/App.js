import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login'
import LoginPhone from './Components/LoginPhone'
import Profile from './Components/Profile'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import RentForm from './Components/RentForm'
import LoginPhoneNew from './Components/LoginPhoneNew/LoginPhoneNew'
import GroupDetails from './Pages/GroupDetails/GroupDetails'
import './App.css'
import Landing from './Pages/Landing'
import Feed from './Pages/Feed/Feed'
import RoomDetails from './Pages/RoomDetails'
import AddNewRoom from './Pages/AddNewRoom'


function App () {
  const [user, loading, error] = useAuthState(getAuth())
  useEffect(() => {
    if (loading) {
      console.log('Loading')
    } else if (error) {
      console.log(error)
    } else if (user) {
      console.log(user)
    }
  }, [loading, error, user])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/login/phone',
      element: <LoginPhone />
    },
    {
      path: '/login/phone/new',
      element: <LoginPhoneNew />
    },
    {
      path: '/profile',
      element: user ? <Profile user={user} /> : <Login />
    },
    {
      path: '/rent',
      element: <RentForm />
    },
    {
      path: '/explore',
      element: <Feed />
    },
    {
      path: '/roomId',
      element: <RoomDetails />
    },
    {
      path: '/groupId',
      element: <GroupDetails />
    },
    {
      path: "/groupId",
      element: <GroupDetails />,
    },
    {
      path: "/owner/add-new-room",
      element: <AddNewRoom />,
    },
  ])

  return (
    <>
      <Navbar user={user} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
