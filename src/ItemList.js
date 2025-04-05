import { useDispatch } from "react-redux";
import { addItems } from "../utils/cardSlice";
const ItemList = ({ items }) => {
  if (!Array.isArray(items)) {
    console.log("Error: items is not an array", items);
    return (
      <div className="p-8 text-xl text-center text-gray-500">
        No items available
      </div>
    );
  }
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item?.card?.info?.id || index}
          className="flex items-center justify-between p-4 border-b border-gray-300"
        >
          <div className="relative w-24 h-24">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${
                item?.card?.info?.imageId || "not"
              }`}
              className="rounded-lg object-cover w-full h-full"
              alt={item?.card?.info?.name || "Food item"}
            />

            <button
              className="absolute bottom-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-tl-lg rounded-br-lg hover:bg-blue-600 transition duration-200 shadow-md"
              onClick={()=>handleAddItem(item)}
            >
              Add
            </button>
          </div>

          <div className="flex-1 ml-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">
                {item?.card?.info?.name}
              </span>
              <span className="text-md font-medium text-gray-700">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {item?.card?.info?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
