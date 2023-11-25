import "../Styles/Register.css";
import ImageB from "../Imgs/Signup.jpg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <form>
          <h1>HELLO THERE !</h1>
          <p>*Carefully fill out the form*</p>
          <input placeholder="FullName *" name="FullName" id="fname" />
          <input type="email" name="email" placeholder="Email*" required />
          <input placeholder="School*" name="school" id="school" />
          <input placeholder="MatNumber *" name="matnumber" id="matnumber" />
          <input type="password" name="password" placeholder="Password*" />
          <input
            type="password"
            name="Cpassword"
            placeholder="Confirm Password*"
          />
          <button type="submit">Register</button>
          <div className="googlogin">Continiue with Google</div>
          <div className="signu">
            Already have an account? click <Link to="/Login">here</Link>
          </div>
        </form>
        <div className="section-b">
          <img src={ImageB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
