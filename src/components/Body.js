import React, { useEffect, useState } from "react";
import RestaurantCardComponent from "./RestaurantCard";
// { withPromotedLabel } from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restsurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCardComponent);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.929694&lng=77.551548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restsurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="container mx-auto p-0">
      <div className="flex items-center justify-end">
        <input
          className="m-4 py-2 px-3 border border-slate-400 rounded-md"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-orange-500 text-white rounded-md py-2 px-3"
          onClick={() => {
            const filteredData = restsurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(filteredData);
          }}
        >
          Search
        </button>
        <button
          className="border rounded-md py-2 px-3 m-4"
          onClick={() => {
            const filterList = restsurants.filter((res) => {
              return res?.info?.avgRating > 4;
            });
            setRestaurants(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRes.map((data, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
            key={data.info.id}
          >
            <Link to={"/restaurants/" + data.info.id}>
              <RestaurantCardComponent resData={data} />
              {/* {data.data.promoted ? (
                <RestaurantCardPromoted resData={data} />
              ) : (
                <RestaurantCardComponent resData={data} />
              )} */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
