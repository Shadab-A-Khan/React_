import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(SWIGGY_API + resId);
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
      setResInfo(resData);
    } catch (error) {
      setResInfo(menuMockData);
      console.log(" Hello! , we are getting **mockData now** FROM MENU");
    }
  }

  return resInfo;
};

export default useRestaurantMenu;
