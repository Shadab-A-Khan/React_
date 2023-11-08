// react router dom give a hook ( hook is a basically a funtion)
// useRouterError : it gives you more info about the error

import { useRouteError } from "react-router-dom";

const Error = () => {
    const err  = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Oopss..</h1> <h2>Something went wrong</h2>
    </div>
  );
};

export default Error;
