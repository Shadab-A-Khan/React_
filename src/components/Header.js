import { LOGO_URL } from "../../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline_offline_status from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStaus = useOnline_offline_status();
  const { loggedInUser } = useContext(UserContext);

  //now here we are subscribing to the hook using selector
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex bg-orange-400 font-bold item bg-center justify-between shadow-[0_-6px_10px_5px_rgba(0,0,0,0.5)]">
      <div className="logo-container">
        <img
          className="w-[150px] hover:bg-gre hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] shadow-[0_0_1px_#adadad]"
          src={LOGO_URL}
        />
      </div>
      <div className="px-5 py-0">
        <ul className="text-xl flex list-none pt-8">
          <li className=" m-1 mt-2.5 p-1 hover:bg-black hover:text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/">Home</Link>
          </li>
          <li className="m-1 mt-2.5 p-1 hover:bg-black hover:text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/about">About</Link>
          </li>
          {/* <li className=" m-1 mt-2.5 p-1  hover:bg-black hover:text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/contact">Contact</Link>
          </li> */}
          <li className=" flex m-1 mt-2.5 p-1  hover:bg-black hover:text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/cart">Cart🛒</Link>
            <div className="flex text-xs h-[67%] text-white rounded-lg font-bold">
              {cartItems.length}
            </div>
          </li>
          {/* <li className="m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <button
            className=" m-1 mt-[0.9rem] p-1 pt-0 btnC cursor-pointer  hover:bg-black hover:text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li className=" bg-gray-200 text-blue-700 m-1 mt-2.5 p-1 hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
            {loggedInUser}
          </li>
          <li className="m-1 ml-0 mt-2.5 p-1 hover:bg-black hover:text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
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
