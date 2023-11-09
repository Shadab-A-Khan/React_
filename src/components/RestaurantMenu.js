import { useEffect, useState } from "react";
import { SWIGGY_API } from "../../utils/constants";
import menuMockData from "../../utils/menuMockData";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

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
      console.log(" **LIVE** FROM MENU");
      console.log(resData);
      setResInfo(resData);
    } catch (error) {
      setResInfo(menuMockData);
      console.log(" Hello! , we are getting **mockData now** FROM MENU");
    }
  }
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {resInfo.map((restaurant) => {
        return (
          <div>
            <h1>{restaurant.info.name}</h1>
            <h2>Menu</h2>
            <h3>{restaurant.info.cuisines.join("  , ")}</h3>
            <h3>{restaurant.info.costForTwo}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
