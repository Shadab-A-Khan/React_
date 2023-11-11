import { useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div>React_project_function</div>
      <div>{count}</div>
      <button
        onClick={() => {
          count = count + 1;
          setCount(count);
        }}
      >
        Increase count
      </button>
      <div>{props.name}</div>
      <div>{props.location}</div>
      <div>{props.contact}</div>
    </div>
  );
};

export default User;
