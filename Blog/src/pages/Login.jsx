import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Login.css";
import ImageA from "../Imgs/login.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
    console.log({ email, password });
  };
  return (
    <div className="Login">
      <div className="container">
        <div className="section-a">
          <img src={ImageA} alt="students" />
        </div>
        <form>
          <h1>WELCOME BACK</h1>
          <input
            type="email"
            name="email"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={onSubmit} type="submit">
            Login
          </button>
          <div className="googlogin">Continiue with Google</div>
          <div className="signu">
            Dont have an account? click <Link to="/Register">here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
