import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "Elon Musk",
        location: "Mars",
        contact: "abc",
        avatar_url: "https://avatars.githubusercontent.com/u/78543910?v=4",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child cdm");
    const data = await fetch("https://api.github.com/users/Shadab-A-Khan");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update now ");
  }

  componentWillUnmount() {
    console.log("unmounting (removing)-> it is called when we leave the page to other page");
  }
  render() {
    console.log("child body");
    const { name, location, avatar_url } = this.state.UserInfo;
    return (
      <div className="classy">
        <img className="h-2/5 w-full ml-1 m-2.5 rounded-[10px]" src={avatar_url} />
        <div>Name: {name}</div>
        <div>Address : {location}</div>
        <div>Contact: abc.com </div>
      </div>
    );
  }
}

export default UserClass;
