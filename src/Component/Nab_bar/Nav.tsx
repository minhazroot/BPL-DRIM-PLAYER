

import logo from "/src/assets/logo.png";
import { FaBitcoin } from "react-icons/fa";
const Nav = ({Coin}:{Coin:number}) => {

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

<h2 className="text-3xl text-orange-200 font-bold flex items-center gap-3"> <FaBitcoin />{Coin}</h2>
      </div>
    </nav>
  );
};

export default Nav;
