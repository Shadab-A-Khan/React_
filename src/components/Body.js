import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../../utils/constants";

const Body = () => {
  const [listOfrestaurantList, setListOfRestaurantList] =
    useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  // const getRestaurants = async () => {
  //   const data = await fetch(SWIGGY_API);
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurantList(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  async function getRestaurants() {
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
      setListOfRestaurantList(resData);
    } catch (error) {
      setListOfRestaurantList(restaurantList);
      console.log(error+  "Hellow we are getting mockData now");
    }
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfrestaurantList.filter(
              (resData) => resData.info.avgRating > 4
            );
            setListOfRestaurantList(filteredList);
          }}
        >
          <h4> 4+ Rating restaurants</h4>
        </button>
      </div>
      <div className="res-container">
        {listOfrestaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
