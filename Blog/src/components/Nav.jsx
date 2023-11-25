import { useState } from "react";
import "./Nav.css";
import placeholder from "../Imgs/placeholder.jpg";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsCollection } from "react-icons/bs";
import { PiNotePencilLight } from "react-icons/pi";
import { VscNotebook } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoChevronDownSharp } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
const Navbar = ({ user }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/Home">C K - B L O G S</Link>
      </div>
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
          <div className="img-cont">
            <div
              className="img"
              style={{
                backgroundImage: `url(${user || placeholder})`,
              }}
            ></div>
          </div>
          <IoChevronDownSharp className="iconn" />

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li className="hidden">
                <PiNotePencilLight />
                <Link to="/Write">Write</Link>
              </li>
              <li>
                <VscNotebook />
                <Link to="/About">About</Link>
              </li>
              <li>
                <FiUser />
                <Link to="/Profile"> My Profile</Link>
              </li>
              <li>
                <BsCollection />
                <Link to="/Library">My Library</Link>
              </li>
              <li>
                <CiLogout />
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
