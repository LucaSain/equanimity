import SubNavBar from "./SubNavBar";

function AwardElement({ props }) {
  return (
    <div className="card bg-base-300 shadow-xl mr-2">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary ">{props.price}</button>
        </div>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  let shop = [
    [
      {
        title: "Books",
        desc: "Get some books and start reading!",
        price: "900xpts",
      },
      {
        title: "One Month Pizza",
        desc: "Enjoy some pizza at lunch!",
        price: "230xpts",
      },
      {
        title: "One Month Pizza",
        desc: "Enjoy some pizza at lunch!",
        price: "230xpts",
      },
      {
        title: "One Month Pizza",
        desc: "Enjoy some pizza at lunch!",
        price: "230xpts",
      },
      {
        title: "One Month Pizza",
        desc: "Enjoy some pizza at lunch!",
        price: "230xpts",
      },
    ],
    [
      {
        title: "Cambrige C1",
        desc: "A very cool english certificate!",
        price: "Unlock!",
      },
      {
        title: "ECDL",
        desc: "You are a PC expert now!",
        price: "Unlock!",
      },
      {
        title: "IELTS",
        desc: "No Cambrige, no problem!",
        price: "Unlock!",
      },
      {
        title: "TOELF",
        desc: "No IELTS, no problem!",
        price: "Unlock!",
      },
      {
        title: "DELF",
        desc: "No English, no problem!",
        price: "Unlock!",
      },
    ],
    [
      {
        title: "Trip to Uganda",
        desc: "Do you know the way?",
        price: "Unlock!",
      },
      {
        title: "Trip to Romania",
        desc: "Descover Romania <3",
        price: "Unlock!",
      },
      {
        title: "Trip to Romania",
        desc: "Descover Romania <3",
        price: "Unlock!",
      },
      {
        title: "Trip to Romania",
        desc: "Descover Romania <3",
        price: "Unlock!",
      },
      {
        title: "Trip to Romania",
        desc: "Descover Romania <3",
        price: "Unlock!",
      },
    ],
  ];

  return (
    <div>
      <SubNavBar props={{ title: "Awards" }} />
      <div className="ml-3">
        <h1 className="text-4xl">General</h1>
        <div className="flex flex-row mt-3">
          {shop[0].map((x) => {
            return <AwardElement props={x} />;
          })}
        </div>
        <h1 className="text-4xl mt-3">Certificates</h1>
        <div className="flex flex-row mt-3">
          {shop[1].map((x) => {
            return <AwardElement props={x} />;
          })}
        </div>
        <h1 className="text-4xl mt-3">Entertainment</h1>
        <div className="flex flex-row mt-3">
          {shop[2].map((x) => {
            return <AwardElement props={x} />;
          })}
        </div>
      </div>
    </div>
  );
}
