import "./App.css";
import Login from "./Components/LoginPage/Login";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
