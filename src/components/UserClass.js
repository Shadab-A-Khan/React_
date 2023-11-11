import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor render");
  }

  componentDidMount(){
    console.log("child componentDidMount render");
  }


  render() {
    console.log("Child Body render");
    const { count } = this.state;
    return (
      <div>
        <div>React_project_class</div>
        <div>{count}</div>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click to Increase Count
        </button>
        <div>{}</div>
        <div>{this.props.name}</div>
        <div>{this.props.location}</div>
        <div>{this.props.contact}</div>
      </div>
    );
  }
}

export default UserClass;
