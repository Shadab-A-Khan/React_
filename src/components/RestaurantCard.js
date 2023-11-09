import { CDN_URL } from "../../utils/constants";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{areaName}</h4>
      <h4> {avgRatingString} starts</h4>
      <h4>Rs {costForTwo} For Two</h4>
    </div>
  );
};

export default RestaurantCard;

// import { CDN_URL } from "../../utils/constants";

// const RestaurantCard = (props) => {
//   const { resData } = props;

//   let {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     areaName,
//     costForTwo,
//     avgRatingString,
//   } = resData?.info;

//   return (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines}</h4>
//       <h4>{areaName}</h4>
//       <h4>{avgRatingString} starts</h4>
//       <h4>{costForTwo} For Two</h4>
//     </div>
//   );
// };
// export default RestaurantCard;
