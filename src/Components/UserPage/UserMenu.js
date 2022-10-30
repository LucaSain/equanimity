export default function UserMenu() {
  let UserName = "Luca";
  return (
    <div className="fixed border-white z-90 top-2 right-4 bg-base-300 btn  w-16 h-12  drop-shadow-lg flex justify-center items-center">
      <button>{UserName}</button>
    </div>
  );
}
