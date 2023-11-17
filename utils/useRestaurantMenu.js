import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "./constants";
import Shimmer_menu from "../src/components/Shimmer_menu";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(SWIGGY_MENU_URL + resId);
      const json = await response.json();
      console.log(json);
      let jsonData = undefined ;
      if (resInfo === null) {
        return <Shimmer_menu />;
      }
      if (jsonData == undefined) {
        for (let i = 0; i < json.data.cards.length; i++) {
          if (json.data.cards[i].groupedCard != undefined) {
            jsonData =
              json.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards[2].card
                .card.itemCards;
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
