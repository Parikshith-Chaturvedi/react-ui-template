import { CDN_URL } from "../utils/constants";

const RestaurantCardComponent = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img
            height={180}
            width={"100%"}
            src={CDN_URL + cloudinaryImageId}
            alt="res"
          />
        </div>
        <div className="card-body">
          <h1>{name}</h1>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating} star</h4>
          <h4>{sla.deliveryTime} time</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCardComponent;
