const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="w-[300px] m-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out bg-white hover:-translate-y-1 overflow-hidden ">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.info.cloudinaryImageId}`}
        alt={resData.info.name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
          {resData.info.name}
        </h3>

        <div className="flex justify-between items-center mb-3">
          <span className="bg-green-600 text-white px-2 py-1 rounded flex items-center gap-1 text-sm">
            <span>⭐</span>
            {resData.info.avgRating}
          </span>
          <span className="text-gray-600 text-sm truncate max-w-[60%]">
            {resData.info.cuisines.join(", ")}
          </span>
        </div>

        <div className="flex justify-between text-gray-600 text-sm">
          <span className="before:content-['₹'] before:mr-1">
            {resData.info.costForTwo / 100}
          </span>
          <span className="before:content-['🕒'] before:mr-2">
            {resData.info.sla.deliveryTime} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}
export default RestaurantCard;