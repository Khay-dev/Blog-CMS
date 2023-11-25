import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />{" "}
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
