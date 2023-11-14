import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRatingString,
}) => {
  return (
    <div className="overflow-hidden w-[300px] h-[370px] m-[19px] pt-5 p-10 rounded-[9px] hover:translate-x-1 hover:translate-y-2" style={{ backgroundColor: "#f0f0f0" }}>
      <h3 className="font-bold text-xl text-black ">{name}</h3>
      <img
        className="w-full h-3/6 my-4 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{cuisines}</h4>
      <h4>{areaName}</h4>
      <h4> {avgRatingString} ⭐</h4>
    </div>
  );
};

export default RestaurantCard;
