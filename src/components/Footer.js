import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer shadow-[8px_8px_8px_-10px_rgba(0,0,0,1.9)] mb-4 mt-28 bg-zinc-100 pt-3 border-black">
      <div className=" flex m-auto justify-center my-4 mb-1">
        Created By{" "}
        <span className="font-semibold text-blue-800 px-2 hover:scale-95">
          {" "}
          Shadab Khan
        </span>{" "}
        <span className="font-bold bg-black text-white rounded-2xl p-[0.20rem] py-0 pb-[0.18rem] mr-2">
          ©️
        </span>{" "}
        2023{" "}
        <span className="text-purple-700 font-bold  ml-1 hover:scale-95 hover:text-red-800">
          Kitchen
        </span>
      </div>
      <div className="flex justify-center">
        <button className="px-2 m-3 ml-0 rounded-2xl text-sm bg-blue-700 text-white font-bold hover:scale-95 ">
          <Link to="https://www.linkedin.com/in/shadab-khan-111469201/">
            in
          </Link>
        </button>
        <button className="px-2 m-3 ml-0 rounded-2xl  bg-gray-500 text-xs text-white font-bold hover:scale-95 ">
          <Link to="https://github.com/Shadab-A-Khan">GH</Link>
        </button>
        <button className="px-1 m-3 ml-0  rounded-2xl  bg-orange-400 text-xs text-white font-bold hover:scale-95 ">
          <Link to="https://leetcode.com/Shadab_Ahmad_Khan/">LtC</Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
