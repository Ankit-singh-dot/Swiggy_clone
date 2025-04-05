import { useEffect, useState } from "react";
import RestaurentCard, { withPromotedLabel } from "./restaurentCard";
import { useEffect, useState , useContext} from "react";
import Shimmer from "./shimmer_cards";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useonilneStatus";
import RestaurentCard from "./restaurentCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [ListofRestaurent, setListofRestaurent] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterRestaurants, setfilterRestaurants] = useState([]);
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
  const { LoggedInUser,setUserData } = useContext(UserContext); 
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.478139&lng=77.5181394&str=North%20Indian&trackingId=6691dc88-5cb4-e4e4-f8ac-1ac12b1214c5&submitAction=ENTER&queryUniqueId=6eb9415e-8793-f2dc-6544-70e6001e4b96"
    );
    const json = await data.json();
    console.log(json);

    setListofRestaurent(
      json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setfilterRestaurants(
      json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus == false) {
    return <h1> oops! we are disconnected ,please check your network</h1>;
  }
  if (ListofRestaurent.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search-box mt-2 mb-3 pl-3">
          <input
            type="text"
            className="search-txt mb-4 mt-2 ml-4  border-2 border-l-pink-400-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all hover:border-blue-500 hover:shadow-lg"
            placeholder="Type to Search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 ml-2 rounded-lg bg-yellow-200 "
            onClick={() => {
              const filterRestaurent = ListofRestaurent.filter((restaurent) =>
                restaurent.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilterRestaurants(filterRestaurent);
            }}
          >
            search
          </button>
          <button
            className="filter-btn  bg-slate-400 ml-9 rounded-md px-3 py-1"
            onClick={() => {
              const filteredList = filterRestaurants.filter(
                (restaurant) => restaurant.card.card.info.avgRating > 4
              );
              setfilterRestaurants(filteredList);
            }}
          >
            Top rated restaurant
          </button>
          <label className="ml-8">UserName :</label>
          <input className="ml-2 border border-black rounded-md p-1" 
          value={LoggedInUser}
          onChange={(e)=>{setUserData(e.target.value )}}></input>
        </div>
      </div>

      <div className="flex flex-wrap ml-14">
        {filterRestaurants.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}
          >
            {restaurant.card.card.info.promoted ? (
              <RestaurentCardPromoted resData={restaurant.card.card} />
            ) : (
              <RestaurentCard resData={restaurant.card.card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
