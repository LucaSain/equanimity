import logo from "../../logo.svg";

export default function NavBarUserPage({ changePage }) {
  return (
    <div className="fixed mt-0 flex z-50 navbar bg-base-300 flex-col w-1/12 rounded h-screen  ">
      <div
        className="flex-initial mb-2"
        onClick={() => {
          changePage("h");
        }}
      >
        <img
          src={logo}
          className="btn btn-ghost normal-case grayscale invert"
        />
      </div>
      <div className="flex flex-col">
        <div className="dropdown dropdown-right z-50 relative mb-2 w-full mr-2 ">
          <label
            tabIndex={0}
            className="btn m-1 border-white/40 w-full text-white"
          >
            Skills
          </label>
          <ul
            tabIndex={0}
            className="ml-3 z-20 relative dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 border-2 border-white/40 "
          >
            <li
              onClick={() => {
                changePage("p");
              }}
              className=" bg-base-100 rounded-lg  mb-1"
            >
              <a>Math</a>
            </li>
          </ul>
        </div>
        <button
          className="btn mb-2 border-white/40 w-full text-white"
          onClick={() => {
            changePage("n");
          }}
        >
          News
        </button>
        <button
          className="btn mb-2 border-white/40 w-full text-white"
          onClick={() => {
            changePage("q");
          }}
        >
          Quests
        </button>
        <button
          className="btn mb-2 border-white/40 w-full text-white"
          onClick={() => {
            changePage("a");
          }}
        >
          Awards
        </button>
        <button
          className="btn mb-2 border-white/40 w-full text-white"
          onClick={() => {
            changePage("g");
          }}
        >
          Guilds
        </button>
        <button
          className="btn mb-2 border-white/40 w-full text-white"
          onClick={() => {
            changePage("d");
          }}
        >
          Demo
        </button>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
