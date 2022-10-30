import { useEffect, useState } from "react";
import img1 from "./Assets/download.jpg";
import img3 from "./Assets/xp.jpg";
import img2 from "./Assets/quest.jpg";
import "./DemoWatch.css";

function DemoWatch({ props }) {
  return (
    <div>
      <div className="wrapper">
        <div className="watch">
          <div className="strap strap-top">
            <div className="mesh"></div>
            <div className="mesh"></div>
            <div className="mesh"></div>
            <div className="mesh"></div>
            <div className="mesh"></div>
          </div>
          <div>
            {props === "1" ? (
              <div
                className="case "
                style={{
                  backgroundImage: "url(/Watch.jpg)",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="crown"></div>
                <div className="power"></div>
              </div>
            ) : props === "2" ? (
              <div
                className="case "
                style={{
                  backgroundImage: "url(/Watch2.jpg)",
                  backgroundSize: "contain",
                }}
              >
                <div className="crown"></div>
                <div className="power"></div>
              </div>
            ) : (
              <div
                className="case "
                style={{
                  backgroundImage: "url(/Watch3.jpg)",
                  backgroundSize: "contain",
                }}
              >
                <div className="crown"></div>
                <div className="power"></div>
              </div>
            )}
          </div>
          <div className="strap strap-bottom">
            <div className="mesh"></div>
            <div className="mesh"></div>
            <div className="mesh"></div>
            <div className="mesh"></div>
            <div className="mesh"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoMockup({ props }) {
  return (
    <div className="mockup-phone border-primary">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 bg-white">
          {props === "1" ? (
            <img src={img1}></img>
          ) : props === "2" ? (
            <img src={img2}></img>
          ) : (
            <img src={img3}></img>
          )}
        </div>
      </div>
    </div>
  );
}

function DemoStack({ props }) {
  const [Forward, setForward] = useState("1");
  useEffect(() => {
    props.callbackf(Forward);
  }, [Forward]);
  return (
    <div className="stack">
      {Forward === "1" ? (
        <div className="card shadow-md bg-primary text-primary-content">
          <div className="card-body flex flex-row">
            <h2 className="card-title flex-1">{props.one}</h2>
            <button
              onClick={() => {
                setForward("2");
              }}
              className="btn"
            >
              ❯
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {Forward <= 2 ? (
        <div className="card shadow bg-primary text-primary-content">
          <div className="card-body flex flex-row">
            <h2 className="card-title flex-1">{props.two}</h2>
            <button
              className="btn"
              onClick={() => {
                setForward("3");
              }}
            >
              ❯
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="card shadow-sm bg-primary text-primary-content">
        <div className="card-body flex flex-row">
          <h2 className="card-title flex-1">{props.three}</h2>
          <h1 className="text-4xl">🎉</h1>
        </div>
      </div>
    </div>
  );
}

export default function DemoPage() {
  const [Callback, setCallBack] = useState("1");
  const [Wallback, setWallBack] = useState("1");
  const callbackf = (x) => {
    setCallBack(x);
  };
  const callbackw = (x) => {
    setWallBack(x);
  };
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-row w-full ">
        <h1 className="text-7xl flex-initial ml-3 mt-1">Demo Page</h1>
        <p className="place-self-end flex-1 ml-3 mt-1">
          Don't know where start? We'll guide you!
        </p>
      </div>
      <br></br>
      <div>
        <h1 className="text-4xl ml-3">1. Use The Phone App</h1>
      </div>

      <div className="flex flex-row">
        <div className="basis-4/6 grid place-items-center">
          <DemoStack
            props={{
              callbackf: callbackf,
              one: "Download the app",
              two: "Select a quest",
              three: "Scan & enjoy",
            }}
          />
        </div>
        <div className="grid place-items-center">
          <DemoMockup props={Callback} />
        </div>
      </div>
      <h1 className="text-4xl ml-3 basis-2/4 mt-5">
        2. Use the watch extension
      </h1>
      <div className="flex flex-row w-full mt-5">
        <div className="flex-initial basis-2/3 grid place-items-center ">
          <DemoStack
            props={{
              callbackf: callbackw,
              one: "Download the app",
              two: "Train for some time",
              three: "Enjoy!",
            }}
          />
        </div>
        <div className="flex-none basis-1/3 grid place-items-center">
          <div className="">
            <DemoWatch props={Wallback} />
          </div>
        </div>
      </div>
    </div>
  );
}
