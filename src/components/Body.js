import React, { useEffect, useState } from "react";
import restaurantObject from "../utils/mockData";
import RestaurantCardComponent from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";

const Body = () => {
  const [restsurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  console.log(restsurants, "renderCheck");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.929694&lng=77.551548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
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
    <div className="body">
      <div className="">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredData = restsurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter"
        onClick={() => {
          const filterList = restsurants.filter((res) => {
            return res?.info?.avgRating > 4;
          });
          setRestaurants(filterList);
        }}
      >
        Filter
      </button>
      <div className="card-container">
        {filteredRes.map((data, index) => (
          <RestaurantCardComponent key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
