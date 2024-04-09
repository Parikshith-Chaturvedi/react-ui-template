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
            className="rounded-lg h-32 object-cover" // Add h-32 class for a height of 32 pixels
            width={"100%"}
            src={CDN_URL + cloudinaryImageId}
            alt="res"
          />
        </div>
        <div className="card-body">
          <h1 className="text-xl font-bold mb-2">{name}</h1>
          <h4 className="text-sm text-gray-500 mb-1">{cuisines.join(", ")}</h4>
          <div className="flex items-center mb-1">
            <span className="text-sm text-gray-500 mr-2">Cost for Two:</span>
            <span className="text-sm font-semibold">{costForTwo}</span>
          </div>
          <div className="flex items-center mb-1">
            <span className="text-sm text-gray-500 mr-2">Rating:</span>
            <span className="text-sm font-semibold">{avgRating} star</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Delivery Time:</span>
            <span className="text-sm font-semibold">
              {sla.deliveryTime} time
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// HOC example

// export const withPromotedLabel = (RestaurantCardComponent) => {
//   return (props) => {
//     return (
//       <>
//         <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
//           Promoted
//         </span>
//         <RestaurantCardComponent {...props} />
//       </>
//     );
//   };
// };

export default RestaurantCardComponent;
