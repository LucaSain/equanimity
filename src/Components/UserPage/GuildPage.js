import { useState } from "react";

function GuildsNavBar() {
  return (
    <div className="navbar bg-base-100 w-11/12">
      <div className="flex-1">
        <h1 className="mb-2 inline-block text-5xl font-bold font-sans text-transparent bg-clip-text drop-shadow-2xl bg-gradient-to-l from-pink-500 to-teal-500 ml-4">
          Explore Guilds
        </h1>
      </div>
      <div className="flex-none -mt-1">
        <input
          type="text"
          placeholder="Search 'em up!"
          className="input input-bordered input-accent w-full max-w-xs "
        />
        <button className="btn bg-base-300  ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bdbdbd"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function GuildCarousel() {
  return (
    <div className="carousel  w-4/4 carousel-center p-4 space-x-4 bg-neutral rounded-box h-1/6 m-2">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://placeimg.com/800/200/arch"
          className=" rounded-box w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className=" rounded-box w-full "
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className=" rounded-box w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className=" rounded-box w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

function GuildWelcome({ props }) {
  return (
    <div>
      <div className="grid place-content-center h-screen">
        <h1 className="flex flex-row text-8xl font-bold font-sans ">
          Welcome to
          <p className="text-transparent bg-clip-text drop-shadow-2xl bg-gradient-to-l from-pink-500 to-teal-500 ml-4">
            Guilds!
          </p>
        </h1>
        <button
          onClick={() => {
            props.callOK(false);
          }}
          className="btn w-2/12 place-self-center mt-12"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}

function GuildElem({ props }) {
  return (
    <div className="alert shadow-lg bg-base-300 flex">
      {props.place !== undefined ? (
        <div className="text-lg border-white border-2 rounded-full w-6 h-6 flex">
          <h1 className="place-self-center ml-1 text-white ">{props.place}</h1>
        </div>
      ) : (
        ""
      )}

      <h3 className="font-bold flex-1">{props.name}</h3>
      <h3 className="flex-none">{props.xp}</h3>
    </div>
  );
}
function GuildCard() {
  return (
    <div className="card w-96 bg-base-200 bg-gradient-to-tr from-slate-700 shadow-xl ml-2 ">
      <div className="card-body">
        <h2 className="card-title">Top xp this month</h2>
        <GuildElem
          props={{ name: "Adventurers' guild", place: 1, xp: "300k" }}
        />
        <GuildElem props={{ name: "Real guild", place: 2, xp: "299k" }} />
        <GuildElem props={{ name: "Who's Joe guild", place: 3, xp: "150k" }} />
      </div>
    </div>
  );
}
function GuildBoosters() {
  return (
    <div className="card w-full bg-neutral shadow-xl ml-2 mr-2">
      <div className="card-body">
        <h2 className="card-title">Boosters & Guild Awards this month</h2>
        <div className="flex flex-row h-full">
          <div className="basis-1/2 mr-1 flex flex-col place-content-evenly ">
            <GuildElem
              props={{ name: "Xp boosters (30)", xp: "For 500k xp" }}
            />
            <GuildElem props={{ name: "Streak freezes (30)", xp: "300k xp" }} />
            <GuildElem
              props={{ name: "Guild themed capes (30)", xp: "1M xp" }}
            />
          </div>
          <div className="flex-1 ml-1 flex flex-col place-content-evenly">
            <GuildElem
              props={{ name: "Xp boosters (30)", xp: "For 500k xp" }}
            />
            <GuildElem props={{ name: "Streak freezes (30)", xp: "300k xp" }} />
            <GuildElem
              props={{ name: "Guild themed capes (30)", xp: "1M xp" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GuildPage() {
  const [OK, setOK] = useState(true);
  const getOK = (OK) => {
    setOK(OK);
  };
  return OK ? (
    <GuildWelcome props={{ callOK: getOK }} />
  ) : (
    <div>
      <div>
        <GuildsNavBar />
      </div>
      <div>
        <div className="w-full flex place-content-center -mt-1">
          <GuildCarousel />
        </div>
        <div className="flex flex-row">
          <GuildCard />
          <GuildBoosters className="flex-1" />
        </div>
      </div>
    </div>
  );
}
