import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useRestaurantMenu = (resId) => {
    useEffect(() => {
      fetchmenu();
    }, []);
  const [resInfo, setresInfo] = useState(null);
  const fetchmenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.478139&lng=77.5181394&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  }; 
  return resInfo;
};
export default useRestaurantMenu;
