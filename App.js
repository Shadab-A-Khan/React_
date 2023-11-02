// {
//   /* <div id="parent">
//     <div id="child">
//         <h1 id="h1"> Heading it is </h1>
//         <h2 id="h2"> Heading it is </h2>
//     </div>
// </div> */
// }

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello , this is heading 1"),
    React.createElement("h2", {}, "Hello , this is heading 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
