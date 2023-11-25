import { useState } from "react";
import "./Nav.css";
import Image from "../Imgs/user.jpg";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { PiNotePencilLight } from "react-icons/pi";
import { IoChevronDownSharp } from "react-icons/io5";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> C K - B L O G S</div>
      <div className="nav-holder-2">
        <BiSearch className="icon" />
        <input type="search" name="" id="" placeholder="Search For Blogs?" />
      </div>
      <ul className="nav-links">
        <li className="nav-holder-3">
          <Link to="/Write">
            <PiNotePencilLight className="iconn" />
            <p>Write</p>
          </Link>
        </li>

        <li className="dropdown nav-holder-4" onClick={toggleDropdown}>
          <img src={Image} alt="user" />
          <IoChevronDownSharp className="iconn" />

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Profile"> My Profile</Link>
              </li>
              <li>
                <Link to="/Library">My Library</Link>
              </li>
              <li>
                <Link to="#">Logout</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
