import NavBar from "./NavBar";
import logo from "../logo.svg";

export default function HomePage() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0">
        <NavBar />
      </div>
      <div className="grid place-content-around h-screen w-screen grid-cols-2">
        <h1 className="ml-8 place-self-center pb-10 font-extrabold font-sans text-transparent text-9xl bg-clip-text bg-gradient-to-l from-pink-500 to-teal-500 ">
          Learning,
          <br />
          the true way.
        </h1>
        <img
          src={logo}
          className="h-3/4 place-self-center hover:animate-pulse"
        ></img>
      </div>
    </div>
  );
}
