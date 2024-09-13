import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header--title">Casino</div>
      <Link to="/see-all-games" className="Header--link Header--item-center">
        SEE ALL GAMES <FaArrowRightLong />
      </Link>
      <Outlet />
    </div>
  );
};

export default Header;
