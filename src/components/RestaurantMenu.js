import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

import CategoryList from "./CategoryList";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null),
    [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <ShimmerComponent />;

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[2]?.card?.card?.info ?? {};

  // console.log(resInfo?.cards[2]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      ?.card ?? {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (d) =>
        d.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="container mx-auto py-16 px-64">
      <div className="w-full rounded-lg overflow-hidden border border-slate-300">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2 text-center">{name}</div>
          <p className="text-gray-500 text-base mb-2 text-center">{areaName}</p>
          <p className="text-gray-500 text-base mb-2">{cuisines.join(", ")}</p>
          <p className="text-gray-700 text-base font-bold mb-2">
            {costForTwoMessage}
          </p>
          <p className="text-gray-500 text-base mb-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="fill-amber-400"
              class="w-6 h-6 fill-amber-500 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            {avgRating} Ratings
          </p>
          <p className="text-gray-500 text-base">Delivery in: 30 mins</p>
        </div>
      </div>
      {categories.map((item, index) => (
        <CategoryList
          key={item?.card?.card?.title}
          data={item?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
