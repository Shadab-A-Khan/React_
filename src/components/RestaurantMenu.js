import { useEffect, useState } from "react";
import { SWIGGY_API } from "../../utils/constants";
import menuMockData from "../../utils/menuMockData";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

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
      {resInfo.map((restaur) => {
        if (restaur?.info?.id == resId) {
          return <Menu key={restaur?.info?.id} {...restaur.info} />;
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
