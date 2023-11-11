import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const About = () => {
//   return (
//     <div>
//       <div className="classy">
//         <User
//           name={"Shadab Ahmad Khan"}
//           location={"Darbhanga"}
//           contact={"Kshadabahmad"}
//         />
//       </div>
//       <div className="funcy">
//         <UserClass
//           name={"Shadab Ahmad Khan"}
//           location={"Darbhanga"}
//           contact={"Kshadabahmad"}
//         />
//       </div>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // this.state={};
    console.log("Parent Constructor render");
  }
  componentDidMount(){
    console.log("Parent CompondDidMount render");
  }
  render() {
    console.log(" Parent body Render");
    return (
      <div>
        <div className="classy">
          <User
            name={"Shadab Ahmad Khan"}
            location={"Darbhanga"}
            contact={"Kshadabahmad"}
          />
        </div>
        <div className="funcy">
          <UserClass
            name={"Shadab Ahmad Khan"}
            location={"Darbhanga"}
            contact={"Kshadabahmad"}
          />
        </div>
      </div>
    );
  }
}
export default About;
