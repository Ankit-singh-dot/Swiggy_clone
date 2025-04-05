import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, ShowItems, setShowIndex }) => {

  console.log(data);
  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold ">
          {data.title} (
          {Array.isArray(data.itemCards) ? data.itemCards.length : 0})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            ShowItems ? "rotate-180" : ""
          }`}
        >
          ⬇️
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          ShowItems ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      ></div>
      {ShowItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
