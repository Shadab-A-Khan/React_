import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -search
 *   -RestaurentContainer
 *      - RestaurentCard
 *         -image
 *         -Name of ResStar Rating ,cuisine, etc
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */
const Headers = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const {restName, cuisine, rating,location} = props; // destructuring
  return (
    <div className="res-card" style={cardStyle}>
      <img className="res-logo" alt="logo" src={props.imgSrc} />
      <h3>{restName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{location}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search Your Restaurant"></input>
        <button>Enter</button>
      </div>
      <div className="res-container">
        <RestaurantCard
          restName="Meghana Food"
          cuisine="Biryani North Indian  Asian"
          rating="4.5 start"
          location="Banglore"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
        />
        <RestaurantCard
          restName="KFC"
          cuisine="Burget Chicken and Fries"
          rating="4.1 start"
          location="Delhi"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
        />
        <RestaurantCard
          restName="Burget King"
          cuisine="Burgers and potato Fries"
          rating="4.2 start"
          location="Hydrabad"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        /> 
         <RestaurantCard
          restName="Meghana Food"
          cuisine="Biryani North Indian  Asian"
          rating="4.5 start"
          location="Banglore"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
        />
        <RestaurantCard
          restName="KFC"
          cuisine="Burget Chicken and Fries"
          rating="4.1 start"
          location="Delhi"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
        />
        <RestaurantCard
          restName="Burget King"
          cuisine="Burgers and potato Fries"
          rating="4.2 start"
          location="Hydrabad"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        />     
           
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
