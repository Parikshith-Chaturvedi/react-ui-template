import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="mb-4 flex items-center" key={item.card.info.id}>
          {/* Left Column */}
          <div className="flex-1 mr-4">
            <div>
              <span className="font-medium text-md text-slate-600">
                {item.card.info.name}
              </span>
              <p className="font-medium">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="text-xs my-2 text-slate-500">
              {item.card.info.description}
            </p>
          </div>
          {/* Right Column */}
          <div className="flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-24 shadow-md rounded mb-2"
            />
            <div className="flex rounded-md overflow-hidden shadow-lg border-2 border-orange-500">
              <button className="text-orange-500 px-3 py-0.5 border-r-2 rounded-lg">
                -
              </button>
              <button className="text-orange-500 px-3 py-0.5 rounded-lg">
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
