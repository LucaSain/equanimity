import ThreeComponent from "./ThreeComponent";

export default function WelcomePage() {
  //todo --add notifications
  return (
    <div>
      <div className=" z-1 grid auto-rows-[50%] h-screen  place-items-center place-content-center grid-cols-2">
        <div className="text-8xl text-center font-extrabold font-sans text-transparent  bg-clip-text drop-shadow-2xl bg-gradient-to-l from-pink-500 to-teal-500">
          <h1> Welcome Back</h1>
        </div>
        <ThreeComponent className="" />
      </div>
    </div>
  );
}
