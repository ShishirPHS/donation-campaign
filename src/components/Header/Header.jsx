import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import "../Header/Header.css";
//
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
    <nav className="container mx-auto py-4 md:py-12 px-5 lg:px-[10px]">
      <div className="flex items-center justify-between">
        <img
          className="w-[100px] lg:w-[252px]"
          src={logo}
          alt="Image of website logo"
        />
        <ul
          className={`lg:flex absolute bg-white px-12 lg:px-0 py-1 lg:py-0 border lg:border-none lg:static lg:space-x-12 text-[#0B0B0B] text-lg duration-1000 z-20 right-[50%] lg:right-0 translate-x-[50%] lg:translate-x-0 rounded-lg lg:rounded-none ${
            open ? "top-16 md:top-[130px]" : "-top-52"
          }`}
        >
          {links}
        </ul>
        <div onClick={() => setOpen(!open)} className="text-2xl lg:hidden">
          {open === true ? (
            <RiCloseLine></RiCloseLine>
          ) : (
            <RiMenu2Fill> </RiMenu2Fill>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
