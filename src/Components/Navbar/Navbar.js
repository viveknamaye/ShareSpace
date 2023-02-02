import { useEffect, useState } from 'react'

import { getFirestore, collection, doc, setDoc } from 'firebase/firestore'
import { addDoc, getDoc } from 'firebase/firestore'

export default function Navbar (props) {
  const shadow = { boxShadow: '0px 5px 2px 0px #9b9b9b78' }

  const [user, setUser] = useState({})
  useEffect(() => {
    if (props.user) {
      getDoc(doc(collection(getFirestore(), 'user'), props.user.uid)).then(
        doc => {
          if (doc.exists()) {
            setUser(doc.data())
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        }
      )
    }
  }, [props.user])
  return (
    <div>
      {/* <h1 className="font-bold">Navbar</h1>
      <h1>{user ? `${user.fname} ${user.lname}` : "Not Logged In"}</h1> */}

      <nav class='fixed top-0 left-0 right-0 drop-shadow bg-gray-100 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900'>
        <div class='container flex flex-wrap items-center justify-between mx-auto'>
          <a href='/#' class='flex items-center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.5'
                y='0.5'
                width='49'
                height='49'
                rx='4.5'
                fill='#A4A4A4'
                stroke='black'
              />
            </svg>

            <span class='ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              ABC
            </span>
          </a>
          <div class='flex md:order-2'>
            {user ? (
              `${user.fname} ${user.lname}`
            ) : (
              <button
                type='button'
                class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
