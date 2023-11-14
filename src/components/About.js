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
      <div className="@apply w-[300px] h-full bg-[rgb(204,209,211)] m-[50px] pt-2.5 p-10 rounded-[10px]">
        <h2>Member</h2>
        <UserClass />
      </div>
    );
  }
}
export default About;
