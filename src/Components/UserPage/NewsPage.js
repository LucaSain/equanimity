import { useState, useEffect } from "react";
import ErasmusLogo from "./Assets/ErasmusLogo1.png";
import SubNavBar from "./SubNavBar";

function NewsPreview({ props }) {
  let title = props[0];
  let message = props[1];
  let OpenBody = props[2];
  return (
    <div
      className=" mt-1 ml-2 alert shadow-lg mb-3 transition delay-150 duration-700"
      onClick={() => {
        OpenBody(true);
      }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold  text-white">{title}</h3>
          <div className="text-xs">{message}</div>
        </div>
      </div>

      <div className="flex-none">
        <div className="badge badge-primary">event</div>
        <button
          onClick={() => {
            OpenBody(true);
          }}
          className="btn btn-sm"
        >
          See
        </button>
      </div>
    </div>
  );
}

function NewsBody(props) {
  return (
    <div className="transition delay-150 duration-700 m-1 ml-4 p-1 h-[100%] w-[62%] rounded-2xl bg-gradient-to-tl from-pink-500 to-teal-500">
      <div className=" p-1 h-[100%] w-[100%] rounded-2xl bg-base-300">
        <div className="hero  ">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-5xl font-bold ">Hop On Erasmus</h1>
              <img
                src={ErasmusLogo}
                className="mix-blend-overlay bg-clip-text bg-gradient-to-tl from-pink-500 to-teal-500"
              />
              <p className="py-6">
                A new erasmus event has started. Check it out!
              </p>
              <button className="btn btn-primary">Add to calendar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [Open, setOpen] = useState("");
  const OpenBody = (action) => {
    if (Open === true) {
      setOpen(false);
      console.log(Open);
    } else {
      setOpen(true);
      console.log(Open);
    }
  };
  return (
    <div className="h-screen">
      <SubNavBar props={{ title: "News" }} />
      <div className="flex h-[92%] w-[99%]">
        <div className="flex-1">
          <NewsPreview
            props={["Hop On Erasmus", "A new Erasmus event!", OpenBody]}
          />
          <NewsPreview
            props={["Hop On Erasmus", "A new Erasmus event!", OpenBody]}
          />
          <NewsPreview
            props={["Hop On Erasmus", "A new Erasmus event!", OpenBody]}
          />
          <NewsPreview
            props={["Hop On Erasmus", "A new Erasmus event!", OpenBody]}
          />
        </div>
        {Open ? <NewsBody className="flex-none basis-2/3" /> : ""}
      </div>
    </div>
  );
}
