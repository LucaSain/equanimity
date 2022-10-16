import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid place-content-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="hover:animate-pulse">
          <img src={logo} className="mt-10"/>
        </figure>
        <div className="card-body mockup-code mt-10 bg-inherit border-4 border-emerald-600">
          <pre data-prefix="$"><code>npm install PC4</code></pre>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
