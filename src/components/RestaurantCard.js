import { CDN_URL } from "../../utils/constants";

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
      <h3>{name}</h3>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{cuisines}</h4>
      <h4>{areaName}</h4>
      <h4> {avgRatingString} starts</h4>
      <h4>Rs {costForTwo} For Two</h4>
    </div>
  );
};

export default RestaurantCard;

