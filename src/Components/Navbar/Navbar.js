import { useEffect, useState } from "react";

import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { addDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const shadow = { boxShadow: "0px 5px 2px 0px #9b9b9b78" };

  const [user, setUser] = useState({});
  useEffect(() => {
    if (props.user) {
      getDoc(doc(collection(getFirestore(), "user"), props.user.uid)).then(
        (doc) => {
          if (doc.exists()) {
            setUser(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      );
    }
  }, [props.user]);
  return (
    <div>
      {/* <h1 className="font-bold">Navbar</h1>
      <h1>{user ? `${user.fname} ${user.lname}` : "Not Logged In"}</h1> */}

      <nav class=" z-50 fixed top-0 left-0 right-0 drop-shadow bg-gray-100 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between mx-auto">
          <a href="/#" class="flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 326 326"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_107_10)">
                <rect
                  y="162.681"
                  width="230.066"
                  height="230.066"
                  rx="20"
                  transform="rotate(-45 0 162.681)"
                  fill="#4F46E5"
                />
              </g>
              <path d="M247 195V205H188.818V195H247Z" fill="white" />
              <path
                d="M158.028 181.076C147.003 181.076 137.553 190.001 137.553 201.551C137.553 212.576 146.478 222.026 158.028 222.026C169.053 222.026 178.503 213.101 178.503 201.551C178.503 190.001 169.578 181.076 158.028 181.076ZM158.028 211.001C152.778 211.001 148.053 206.801 148.053 201.026C148.053 195.776 152.253 191.051 158.028 191.051C163.278 191.051 168.003 195.251 168.003 201.026C168.003 206.801 163.803 211.001 158.028 211.001Z"
                fill="white"
              />
              <path
                d="M119.174 160.6C119.699 160.6 120.749 160.6 121.274 160.075L142.274 149.575C145.949 154.3 151.724 157.45 158.024 157.45C169.574 156.925 178.499 148 178.499 136.975C178.499 125.95 169.574 116.5 158.024 116.5C146.999 116.5 137.549 125.425 137.549 136.975C137.549 138.025 137.549 139.075 138.074 140.125L116.549 150.625C113.924 152.2 112.874 155.35 114.449 157.45C114.974 159.55 117.074 160.6 119.174 160.6ZM158.024 127C163.274 127 167.999 131.2 167.999 136.975C167.999 142.225 163.799 146.95 158.024 146.95C152.774 146.95 148.049 142.75 148.049 136.975C148.574 131.2 152.774 127 158.024 127Z"
                fill="white"
              />
              <path
                d="M134.925 184.751L113.4 174.251C113.925 172.676 113.925 171.101 113.925 169.001C113.925 157.976 105 148.526 93.45 148.526C81.9 148.526 73.5 157.976 73.5 169.001C73.5 180.026 82.425 189.476 93.975 189.476C99.75 189.476 105 187.376 108.675 183.176L130.725 194.201C131.25 194.726 132.3 194.726 132.825 194.726C134.925 194.726 136.5 193.676 137.55 191.576C138.6 189.476 137.55 186.326 134.925 184.751ZM93.975 178.976C88.2 178.976 84 174.251 84 169.001C84 163.751 88.2 159.026 93.975 159.026C99.225 159.026 103.95 163.226 103.95 169.001C103.425 174.251 99.225 178.976 93.975 178.976Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_i_107_10"
                  x="8.28418"
                  y="8.28418"
                  width="315.794"
                  height="312.794"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="10" dy="4" />
                  <feGaussianBlur stdDeviation="3.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_107_10"
                  />
                </filter>
              </defs>
            </svg>

            <span class="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {/* <span className='text-blue-500'>S</span>hare<span  className="text-blue-500">S</span>pace */}
              ShareSpace
            </span>
          </a>
          <div class="flex md:order-2">
            {!user || user.fname !== undefined ? (
              `${user.fname} ${user.lname}`
            ) : (
              <button
                type="button"
                onClick={() =>
                  (window.location.href =
                    "http://localhost:3000/login/phone/new")
                }
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
