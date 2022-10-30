import logo from "./logo.svg";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import UserPage from "./Components/UserPage/UserPage";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="h-screen w-screen bg-base-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
