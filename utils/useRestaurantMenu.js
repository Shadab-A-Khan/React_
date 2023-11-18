import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(SWIGGY_MENU_URL + resId);
      const json = await response.json();
      let jsonData = undefined;
      if (jsonData == undefined) {
        for (let i = 0; i < json?.data?.cards?.length; i++) {
          if (json?.data?.cards[i]?.groupedCard != undefined) {
            jsonData =
              json?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
              const categories = json.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
              jsonData = categories;
            break;
          }
        }
      }
      setResInfo(jsonData);
      console.log(" **LIVE** FROM MENU");
    } catch (error) {
      console.log(" Hello! , we are getting **mockData now** FROM MENU");
    }
  }
  return resInfo;
};

export default useRestaurantMenu;
