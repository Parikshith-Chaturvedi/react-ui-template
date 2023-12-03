import restaurantObject from "../utils/mockData";
import RestaurantCardComponent from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {restaurantObject.map((data, index) => (
          <RestaurantCardComponent key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
