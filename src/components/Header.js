import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline_offline_status from "../../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStaus = useOnline_offline_status();
  return (
    <div className="flex item bg-center justify-between bg-[orange] border text-[black] border-solid border-[black]">
      <div className="logo-container">
        <img className="w-[200px]" src={LOGO_URL} />
      </div>
      <div className="px-5 py-0">
        <ul className="text-2xl flex list-none pt-8" >
          <li className="m-2.5 p-2.5"> {onlineStaus == true ? "✅" : "❌"}</li>
          <li className="m-2.5 p-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2.5 p-2.5">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2.5 p-2.5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-2.5 p-2.5">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="m-2.5 p-2.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className=" btnC cursor-pointer ml-2.5 py-0 p-[30px] bg-gray-300"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}

          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;