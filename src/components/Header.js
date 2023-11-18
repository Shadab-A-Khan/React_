import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline_offline_status from "../../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStaus = useOnline_offline_status();
  return (
    <div className="flex item bg-center justify-between bg-[#d5ebfa] shadow-[0_-6px_10px_5px_rgba(0,0,0,0.5)]">
      <div className="logo-container">
        <img className="w-[200px] hover:bg-gre hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] shadow-[0_0_1px_#adadad]" src={LOGO_URL} />
      </div>
      <div className="px-5 py-0">
        <ul className="text-xl flex list-none pt-8">
          <li className="text-bold m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-bold m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/about">About</Link>
          </li>
          <li className="text-bold m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-bold m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/cart">Cart🛒</Link>
          </li>
          {/* <li className="m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <button
            className="text-bold m-1 mt-2.5 p-1 btnC cursor-pointer hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="text-bold m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            {" "}
            {onlineStaus == true ? "✅" : "❌"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// <div className="flex item bg-center justify-between bg-[#d5ebfa]">
