import RestaurantCard, { veg } from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline_offline_status from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfrestaurantList, setListOfRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, SetFilteredRestaurant] = useState([]);
  const VegFoodComponent = veg(RestaurantCard);
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
      console.log(resData);
      setListOfRestaurantList(resData);
      SetFilteredRestaurant(resData);
    } catch (error) {
      setListOfRestaurantList(restaurantList);
      SetFilteredRestaurant(restaurantList);
      console.log(" Hello! , we are getting **mockData now**");
    }
  }
  const onlinestatus = useOnline_offline_status();
  if (onlinestatus === false) {
    return (
      <h1>
        Looks Like your internet is offline, please check your internet
        Connection
      </h1>
    );
  }
  return listOfrestaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[100%] h-[100%]">
      <div className="flex justify-between m-2.5">
        {/*Search */}
        <div className="m-2.5 p-2.5">
          <input
            type="text"
            className="p-2 m-2 hover:translate-y-1"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" bg-blue-600 text-white p-2 m-2 rounded-lg hover:translate-y-1"
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
            SetFilteredRestaurant(filteredList);
          }}
        >
          <h1 className="bg-green-200 mx-10 p-2 rounded-lg hover:translate-y-1">
            Top Rated ⭐{" "}
          </h1>
        </button>
      </div>
      <div className="flex flex-wrap mx-[7%] mr-rounded-lg">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              className="no-underline"
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant?.info?.veg ? (
                <VegFoodComponent {...restaurant?.info} />
              ) : (
                <RestaurantCard {...restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
