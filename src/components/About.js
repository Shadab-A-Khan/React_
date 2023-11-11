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
      <div className="about">
        <h2>Member</h2>
        <UserClass />
      </div>
    );
  }
}
export default About;
