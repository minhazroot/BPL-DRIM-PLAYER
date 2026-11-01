
import React from "react";
import logo from "/src/assets/logo.png";

const Nav = () => {
  return (
    <nav className="bg-gray-400 w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">

        <img src={logo} alt="Logo" className="w-16" />

        <ul className="flex gap-10 items-center">
          <li><a href="">Home</a></li>
          <li><a href="">Fixture</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Schedules</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Nav;
