import React, { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

function Carousel(props) {
  return (
    <>
      <div id="default-carousel" class="relative" data-carousel="static">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-test-4399d.appspot.com/o/profile%2FiZrzTTp3Q4WcVp5VUydsp9N3oK92?alt=media&token=2f47222b-da63-4cf0-b0aa-038c23e53050"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-test-4399d.appspot.com/o/profile%2FiZrzTTp3Q4WcVp5VUydsp9N3oK92?alt=media&token=2f47222b-da63-4cf0-b0aa-038c23e53050"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-test-4399d.appspot.com/o/profile%2FiZrzTTp3Q4WcVp5VUydsp9N3oK92?alt=media&token=2f47222b-da63-4cf0-b0aa-038c23e53050"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

function AssociateIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="55"
      viewBox="0 0 76 55"
      fill="none"
    >
      <path
        d="M47.9055 32.7833C49.9555 30.3917 51.3222 27.3167 51.3222 24.2417C51.3222 16.725 45.1722 10.9167 37.9972 10.9167C30.8222 10.9167 24.6722 16.725 24.6722 23.9C24.6722 27.3167 26.0389 30.3917 28.0889 32.4417C23.6472 34.8333 20.2305 38.25 18.1805 43.0333C17.1555 45.425 17.4971 48.5 18.8638 50.8917C20.5722 53.2833 23.3055 54.65 26.0389 54.65H49.6139C52.3472 54.65 55.0805 53.2833 56.7889 50.8917C58.4972 48.5 58.4972 45.7667 57.4722 43.0333C55.7639 38.5917 52.3472 34.8333 47.9055 32.7833ZM31.5055 23.9C31.5055 20.4833 34.5805 17.75 37.9972 17.75C41.4139 17.75 44.4889 20.4833 44.4889 24.2417C44.4889 28 41.4139 30.3917 37.9972 30.3917C34.5805 30.3917 31.5055 27.6583 31.5055 23.9ZM51.3222 47.1333C50.9805 47.475 50.2972 47.8167 49.9555 47.8167H26.0389C25.3555 47.8167 25.0139 47.475 24.6722 47.1333C24.3305 47.1333 24.3305 46.45 24.3305 45.7667C26.7222 40.3 31.8472 36.8833 37.9972 36.8833C44.1472 36.8833 49.2722 40.3 51.6639 45.7667C51.6639 46.45 51.6639 47.1333 51.3222 47.1333Z"
        fill="#D9D9D9"
      />
      <path
        d="M21.9397 30.05C21.9397 28.3417 20.573 26.6333 18.5229 26.6333H7.24789C8.61456 23.2167 12.0312 21.1667 15.7896 21.1667C21.598 21.1667 26.0397 16.725 26.0397 10.9167C26.0397 5.10834 21.2563 0.666672 15.7896 0.666672C10.3229 0.666672 5.53956 5.10834 5.53956 10.9167C5.53956 12.9667 6.2229 15.0167 7.58956 16.725C4.51456 18.4333 2.12289 20.825 1.09789 23.9C0.072895 25.95 0.414562 28.3417 1.43956 30.3917C2.80623 32.4417 4.85623 33.4667 7.24789 33.4667H18.1812C20.2313 33.4667 21.9397 32.1 21.9397 30.05ZM12.3729 10.9167C12.3729 8.86667 14.0812 7.5 15.7896 7.5C17.4979 7.5 19.2062 9.20834 19.2062 10.9167C19.2062 12.9667 17.4979 14.3333 15.7896 14.3333C14.0812 14.3333 12.3729 12.625 12.3729 10.9167Z"
        fill="#D9D9D9"
      />
      <path
        d="M74.9002 23.8991C73.5335 20.8241 71.1418 18.0908 68.4085 16.3824C69.4335 14.6741 70.4585 12.6241 70.4585 10.5741C70.4585 5.10745 65.6752 0.324112 60.2085 0.324112C54.7418 0.324112 49.9585 4.76578 49.9585 10.5741C49.9585 16.3824 54.7418 20.8241 60.2085 20.8241C63.9668 20.8241 67.3835 22.8741 68.4085 26.6324H57.4752C55.4252 26.6324 54.0585 27.9991 54.0585 30.0491C54.0585 31.7574 55.4252 33.4658 57.4752 33.4658H68.4085C70.8002 33.4658 72.8502 32.4408 74.2168 30.3908C75.5835 28.3408 75.9252 25.9491 74.9002 23.8991ZM60.2085 7.49911C62.2585 7.49911 63.6252 9.20745 63.6252 10.9158C63.6252 12.9658 61.9168 14.3324 60.2085 14.3324C58.5002 14.3324 56.7918 12.6241 56.7918 10.9158C56.7918 8.86578 58.1585 7.49911 60.2085 7.49911Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

function Button(props) {
  return (
    <div
      style={{
        borderRadius: "50px",
        width: "fit-content",
        padding: "5px 10px",
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
    >
      {props.text}
    </div>
  );
}
function Associate(props) {
  return (
    <>
      <div
        className="associate-title"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Associated Groups
      </div>
      <div
        className="associate-icon"
        style={{
          backgroundColor: "#637AF6",
          width: "150px",
          height: "150px",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <AssociateIcon />
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: "20px",
            width: "50%",
            margin: "10px",
            justifyContent: "space-evenly",
          }}
        >
          <div>4</div>
          <div>/</div>
          <div>7</div>
        </div>
      </div>
    </>
  );
}
function Info(props) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {props.room.name}
        </div>
        <div
          style={{
            color: "gray",
            fontSize: "15px",
          }}
        >
          <span
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            ₹ {props.room.rent}
          </span>{" "}
          for {props.room.size} Square foots
        </div>
        <div>{props.room.address.street}</div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <Button
            color="white"
            bgcolor="#DB3C3C"
            text={`${props.room.gender}`}
          />
          <Button
            color="white"
            bgcolor="#3C68DB"
            text={`Max: ${props.room.accomodation} people`}
          />
          <Button color="black" bgcolor="#E2E5EB" text="&#11088;	4 Stars" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          By
          <img
            src="https://st.depositphotos.com/46079520/55766/v/600/depositphotos_557665192-stock-illustration-src-letter-logo-design-black.jpg"
            alt=""
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          Dani Boi
        </div>
        <div className="bio">{props.room.bio}</div>
      </div>
    </>
  );
}

function Review(props) {
  return (
    <>
      <div
        className="review"
        style={{
          margin: "10px",
        }}
      >
        <div
          className="reviewer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          <img
            src="https://st.depositphotos.com/46079520/55766/v/600/depositphotos_557665192-stock-illustration-src-letter-logo-design-black.jpg"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <div className="reviewer-detail">
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Pranav Dani
            </div>
            <div>&#11088; 4 Stars</div>
          </div>
        </div>
        <div className="reviewer-body">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable Englishitors now use Lorem Ipsum as their default
          model text, a
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "black",
            margin: "10px 0px",
          }}
        />
      </div>
    </>
  );
}

function Reviews(props) {
  return (
    <>
      <div
        className="review-title"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Reviews
      </div>
      <div className="reviews">
        <Review />
        <Review />
      </div>
    </>
  );
}

const RoomDetails = (props) => {
  const [room, setRoom] = useState(useLocation().state);
  return (
    <>
      <Sidebar />

      <div class="p-4 sm:ml-64 mt-16">
        <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <a className="flex items-center gap-2 mb-4" href="">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#615858"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="font-bold text-gray-500">Back</span>
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-test-4399d.appspot.com/o/profile%2FiZrzTTp3Q4WcVp5VUydsp9N3oK92?alt=media&token=2f47222b-da63-4cf0-b0aa-038c23e53050"
              alt="..."
              style={{
                borderRadius: "20px",
                width: "60%",
              }}
            />
            <div
              style={{
                width: "40%",
              }}
            >
              <Info room={room} />
            </div>
          </div>
          <br />
          <Associate />
          <br />
          <Reviews />
          {/* <Carousel /> */}

          {/* <div className="flex gap-4 justify-between items-center">

            </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RoomDetails;
