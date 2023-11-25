import { Link } from "react-router-dom";
import "../Styles/Welcome.css";
const Welcome = () => {
  return (
    <div>
      <div className="mainSection">
        <h2>Welcome to CK blogs</h2>
        <p> Uju Chinedum Chimaraoke</p>
        <p>U2018/5570101</p>
        <p>Student Blog Content Management System</p>
        <p>You’re a click away from starting your journey with us</p>

        <div className="btn">
          <Link to="/Register">
            <div className="custom-btn btn-13">Register</div>
          </Link>
          <Link to="/Login">
            <div className="custom-btn btn-13">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
