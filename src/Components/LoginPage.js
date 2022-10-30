import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div>
      <h1 className="grid h-screen w-screen absolute z-0 place-content-center">
        <h1 className="-mt-10 tracking-wider leading-[1.6] font-extrabold font-sans text-transparent text-[11rem] bg-clip-text bg-gradient-to-l from-pink-500 to-teal-500  opacity-30 drop-shadow-2xl   ">
          Learning,
          <br />
          <br />
          the true way.
        </h1>
      </h1>
      <div className=" z-1 grid place-content-center h-screen">
        <div className="card w-96 bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
            <h2 className="card-title">Password</h2>
            <input
              type="password"
              placeholder="Type here"
              className="input  w-full max-w-xs"
            />
            <br />
            <div className="card-actions justify-between">
              <a className="grid place-content-center mt-6" href="0">
                Forgot Password?
              </a>
              <Link to="/user">
                <button className="btn btn-primary border-white bg-base-100 normal-case hover:bg-slate-900 hover:border-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
