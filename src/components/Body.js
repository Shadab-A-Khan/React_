import RestaurantCard, { veg } from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect, useContext } from "react";
import { SWIGGY_API } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline_offline_status from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
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
      console.log(" Hello! , we are *LIVE* now");
      setListOfRestaurantList(resData);
      SetFilteredRestaurant(resData);
    } catch (error) {
      setListOfRestaurantList(restaurantList);
      SetFilteredRestaurant(restaurantList);
      console.log(" Hello! , we are getting *mockData now*");
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
    <div>
      <div className=" flex w-[50%] m-auto justify-center text-center my-[2rem]">
        {/* fiter */}
        <button
          onClick={() => {
            const filteredList = listOfrestaurantList.filter(
              (resData) => resData.info.avgRating > 4
            );
            SetFilteredRestaurant(filteredList);
          }}
        >
          <h1 className="bg-green-600 text-white ml-[1rem] p-[0.5rem] mr-[0.6rem] rounded-lg hover:translate-y-1">
            Filter 4⭐ Restaurants
          </h1>
        </button>
        {/*Search */}
        <div className="m-[0.25rem] p-[0.25rem]  shadow-[0_0_2.5px_#adadad] rounded-lg">
          <input
            type="text"
            className="p-[0.25rem] pr-0 m-[0.25rem] hover:translate-y-1"
            value={searchText}
            placeholder="Search Restaurant..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" bg-blue-600 text-white p-[0.25rem] m-[0.25rem] rounded-lg hover:translate-y-1"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfrestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      {/* <div className="searchflex items-center m-[0.25rem] p-[0.25rem] px-0 rounded-[9px] shadow-[0_0_1.5px_#adadad] hover:scale-95 hover:shadow-[0_0_3px_#adadad]">
        <input
          className="p-[0.25rem] pr-0 m-[0.25rem] hover:translate-y-1"
          placeholder="Enter User Name"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div> */}
      </div>
      <div className="flex flex-wrap mx-[7%] mr-rounded-lg">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              className="no-underline "
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