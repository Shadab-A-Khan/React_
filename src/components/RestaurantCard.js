import { Component } from "react";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  costForTwo,
  areaName,
  avgRatingString,
}) => {
  return (
    <div className="overflow-hidden w-[17.394rem] h-[23.9rem] m-[1.5rem] mt-[2rem] pt-4 p-3 rounded-[9px] shadow-[0_0_1.5px_#adadad] hover:scale-95 hover:shadow-[0_0_3px_#adadad]">
      <h3 className="font-bold text-xl text-black ">{name}</h3>
      <img
        className="w-full h-3/6 my-4 rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="text-xs">{cuisines.join(",")}</h4>
      <h4>{areaName}</h4>
      <ul className="flex text-s">
        <li className="my-[10%] pr-2 list-style-ty font-bold">
          <h4
            className={
              avgRatingString >= 4
                ? `bg-green-400` + " rounded-[5px] px-1"
                : `bg-red-500` + " rounded-[5px] px-1"
            }
          >
            {" "}
            ⭐{avgRatingString}
          </h4>
        </li>
        <li className="mt-[10%] pr-2 text-sm font-serif">🕗{sla.slaString}</li>
        <li className="mt-[10%] pr-2 text-sm font-serif">▪️Rs{costForTwo}</li>
      </ul>
    </div>
  );
};

// Higher order Component
export const veg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-6 overflow-auto px-2 text-sm rounded-md ">
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
