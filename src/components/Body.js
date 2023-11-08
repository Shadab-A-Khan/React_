import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfrestaurantList, setListOfRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, SetFilteredRestaurant] = useState([]);

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
      console.log(" Hello! , we are **LIVE** now");
      setListOfRestaurantList(resData);
      SetFilteredRestaurant(resData);
    } catch (error) {
      setListOfRestaurantList(restaurantList);
      SetFilteredRestaurant(resData);
      console.log(" Hello! , we are getting **mockData now**");
    }
  }
  console.log("render");
  return listOfrestaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">


        {/*Search */}
        <div className="search">

          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="seach..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="serach-button"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfrestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetFilteredRestaurant(filteredRestaurant);
            }}
          >
            Press to Search
          </button>


        </div>


        {/* fiter */}
        <button
          onClick={() => {
            const filteredList = listOfrestaurantList.filter(
              (resData) => resData.info.avgRating > 4
            );
            setListOfRestaurantList(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
