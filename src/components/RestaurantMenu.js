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
  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div key={resInfo.id} className="menu-card">
      {resInfo.map((restaurant) => {
        return (
          <div key={restaurant.id} className="resta">
            <h1>{restaurant.info.name}</h1>
            <div className="menu">
              <h2>Menu</h2>
              <ul>
                {restaurant.info.cuisines.map((cuisine) => (
                  <li key={cuisine.id}>{cuisine}</li>
                ))}
              </ul>
            </div>
            <h3>Rs{restaurant.info.costForTwo}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
