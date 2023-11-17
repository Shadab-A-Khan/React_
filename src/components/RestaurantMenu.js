import { useParams } from "react-router-dom";
import { SWIGGY_API, CDN_URL } from "../../utils/constants";
import Menu from "./Menu";
import Shimmer_menu from "./Shimmer_menu";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import restaurantList from "../../utils/mockData";
import { useState, useEffect } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [res, setRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      setRes(resData);
      console.log("LIV");
    } catch (error) {
      setRes(restaurantList);
      console.log("Mocking");
    }
  }

  if (resInfo === null) {
    return <Shimmer_menu />;
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i].info.id === resId) {
      setRes(res[i].info);
      break;
    }
  }

  return (
    <div >
      <div className="flex space-between columns-1 bg-black text-white pt-3">
        <div className="">
          {" "}
          <img
            className="h-[9rem] ml-[32rem] rounded-lg hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] shadow-[0_0_1px_#adadad] p-2"
            alt="res-logo"
            src={CDN_URL + res.cloudinaryImageId}
          />
        </div>

        <div className=" ml-[2rem] mt-[1rem] text-white">
          <h3 className="font-bold text-xl hover:translate-y-1 hover:scale-95">{res.name}</h3>
          <h4>{res.areaName}</h4>
          <ul className="flex text-s">
            <li className="my-[10%] pr-2 list-style-ty font-bold hover:translate-y-1 hover:scale-95 rounded-lg">
              <h4
                className={
                  res.avgRating >= 4
                    ? `bg-green-400` + " rounded-[5px] px-1"
                    : `bg-red-500` + " rounded-[5px] px-1"
                }
              >
                {" "}
                ⭐{res.avgRating}
              </h4>
            </li>
            <li className="mt-[10%] pr-2 text-white text-sm font-serif hover:translate-y-1 hover:scale-95 rounded-lg ">
              🕗25 min
            </li>
            <li className="mt-[10%] pr-2 text-sm font-serif hover:translate-y-1 hover:scale-95 rounded-lg ">
              ▪️Rs{res.costForTwo}
            </li>
          </ul>
        </div>
      </div>
      <div
        key={resInfo.id}
        className="text-[15px] flex flex-wrap flex-row justify-center m-2.5"
      >
        {resInfo.map((menu) => {
          return <Menu key={menu?.card.info?.id} {...menu.card.info} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
