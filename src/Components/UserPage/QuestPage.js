import SubNavBar from "./SubNavBar";

function QuestElement({ props }) {
  const badges = {
    classic: "badge badge-accent mr-1",
    Legendary:
      "badge bg-gradient-to-l to-teal-500 from-pink-500 text-white mr-1",
    Project: "badge badge-secondary mr-1",
  };
  const type = props.type;
  const msg = props.msg;
  const completion = props.completion;
  const badge = props.badge;
  const xp = props.xp;
  return (
    <div className="alert shadow-lg mb-3 flex">
      <div className="flex-1">
        {type === "current" ? (
          <svg
            className="h-7 invert flex-initial"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.8)" />
            <polyline
              fill="#fff"
              points="4.8,11.1 15.5,11.1 11.5,6.7 13,5.2 19.7,12.2 12.9,19 11.1,17.4 15.3,13.3 4.8,13.4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current -ml-1 flex-shrink-0 h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}

        <div className="flex-1 flex flex-row">
          <h3 className="font-bold mr-5 basis-1/4">{msg}</h3>
          <h4 className="basis-1/6">{completion}</h4>
          {xp !== undefined ? <h4>{xp}xp</h4> : ""}
          <div className="flex-1"></div>
          <div className="flex-none">
            {badge.map((x) => {
              if (badges[x] !== undefined) {
                return <div className={badges[x]}>{x}</div>;
              }
              return <div className={badges.classic}>{x}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuestPage() {
  return (
    <div>
      <SubNavBar props={{ title: "Quests" }} />
      <div className="flex">
        <div className="ml-2 mr-2 flex-1">
          <h2 className="text-4xl mb-3">Current</h2>
          <div>
            <QuestElement
              props={{
                msg: "Solve 30 Partials",
                badge: ["Calculus", "Legendary"],
                completion: "29/30",
                type: "current",
              }}
            />
            <QuestElement
              props={{
                msg: "The life of Lincoln",
                badge: ["English", "Project"],
                completion: "0/1",
                type: "current",
              }}
            />
            <QuestElement
              props={{
                msg: "Solve 10 conditionals",
                badge: ["English"],
                completion: "2/10",
                type: "current",
              }}
            />
          </div>
          <div className="flex flex-row mb-3">
            <h2 className="text-4xl flex-1">Completed</h2>
            <h3 className="flex-none mt-4 mr-2">xp today: 100</h3>
          </div>
          <div>
            <QuestElement
              props={{
                msg: "Draw a house",
                badge: ["Art"],
                completion: "1/1",
                type: "completed",
                xp: "50",
              }}
            />
            <QuestElement
              props={{
                msg: "Draw a house",
                badge: ["Art"],
                completion: "1/1",
                type: "completed",
                xp: "50",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
