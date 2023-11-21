import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // this.state={};
    console.log("Parent Constructor render");
  }
  componentDidMount() {
    console.log("Parent cdm render");
  }
  render() {
    console.log(" Parent body Render");
    return (
      // <div className="@apply w-[300px] h-full bg-[rgb(204,209,211)] m-[50px] pt-2.5 p-10 rounded-[10px]">
      //   {/* <div>
      //     <UserContext.Consumer>
      //       {({ loggedInUser }) => <h1> User : {loggedInUser}</h1>}
      //     </UserContext.Consumer>
      //   </div> */}
      //   <UserClass />
      // </div>
      <div className="flex">
        <div className="w-1/2 m-[20rem] mr-0 my-[13rem]">
          <h1 className="bg-green-700 w-[60%] p-2 rounded-lg text-white text-xl hover:scale-95 hover:bg-gray-600">
            Eat better , Taste better and Feel better
          </h1>
          <h1 className="text-3xl p-3 pl-0">
            Welcome to Our
            <span className=" font-semibold text-yellow-700 hover:scale-95 hover:text-orange-500 rounded-lg px-[0.4rem]">
              Kitchen
            </span>
          </h1>
          <h1 className="text-5xl">Discover Your New Favorite.</h1>
          <div className="mt-6">
            {" "}
            <h1 className="w-24 rounded-md p-[0.4rem] shadow-[8px_8px_8px_-8px_rgba(0,0,0,0.9)]s px-[0.4rem]">
              My Profiles
            </h1>
            <button className="p-2 m-3 ml-0 pr-3 bg-blue-700 text-white font-bold rounded-lg hover:scale-95 ">
              ➡️{" "}
              <Link to="https://www.linkedin.com/in/shadab-khan-111469201/">
                linkedin
              </Link>
            </button>
            <button className="p-2 m-3 ml-0 pr-3 bg-gray-500 text-white font-bold rounded-lg hover:scale-95 ">
              ➡️ <Link to="https://github.com/Shadab-A-Khan">GitHub</Link>
            </button>
            <button className="p-2 m-3 ml-0 pr-3 bg-orange-400 text-white font-bold rounded-lg hover:scale-95 ">
              ➡️{" "}
              <Link to="https://leetcode.com/Shadab_Ahmad_Khan/">LeetCode</Link>
            </button>
          </div>
        </div>
        <div className="bg-white w-1/2">
          <img
            className="w-[50%] m-[12rem] ml-0 hover:scale-95"
            src="https://foodfire-chapter09.netlify.app/burger-image.ec55d069.png"
          ></img>
        </div>
      </div>
    );
  }
}
export default About;
