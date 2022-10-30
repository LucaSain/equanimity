import logo from "../logo.svg";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar bg-base-300">
      <div className="grid-1 btn btn-ghost">
        <img className=" grayscale invert w-12 " src={logo} />{" "}
        <p className=" -ml-15 font-semibold border-solit border-2 rounded border-slate-600 w-10 text-center">
          Edu
        </p>
      </div>
      <div className="flex-1 right-0 mr-0 absolute">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Realms</a>
          </li>
          <li tabIndex={0}>
            <a>
              Info
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="login">
              <a>Enroll Now</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
