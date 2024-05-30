import { useState } from "react";
import ItemList from "./ItemList";

const CategoryList = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <>
      <div className="w-full border border-slate-300 p-4 my-4 rounded-md" onClick={handleClick}>
        <div className=" flex justify-between my-2 cursor-pointer">
          <span className="text-md font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <svg
            className="w-4 h-4 fill-current text-gray-600 transform transition-transform duration-200"
            viewBox="0 0 20 20"
          >
            <path d="M10 12.59l6.3-6.3a1 1 0 011.4 1.42l-7 7a1 1 0 01-1.4 0l-7-7a1 1 0 111.4-1.42L10 12.59z" />
          </svg>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};

export default CategoryList;
