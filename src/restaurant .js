import { useEffect, useState } from "react";
import useRestaurantMenu from "./useRestaurant";
import Shimmer from "./shimmer_cards";
import { useParams } from "react-router";
// import useRestaurantMenu from "./useRestaurant";
import { MENU_API } from "./constant";
import RestaurantCategory from "./restaurantCategory";
// import { useState } from "react";
const RestaurantMenu = () => {
  // const [resInfo, setresinfo] = useState();
  const [ShowIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  // const fetchmenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.478139&lng=77.5181394&restaurantId=" +
  //       resId +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setresinfo(json.data);
  // };
  // useEffect(() => {
  //   fetchmenu();
  // }, []);
  console.log(resInfo);
  if (resInfo === 0) return <Shimmer />;
  const { name = "Loading...", cuisines = [] } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  // const { itemCards =[] } =
  //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
  //     ?.card || {};
  const menuData =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR || {};

  const { cards = [] } = menuData;
  console.log(menuData);
  console.log(cards);

  return (
    <div  className=" text-center">
      <div>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>

        <h2 className="font-bold">{cuisines.join(",")}</h2>
        {cards.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            ShowItems={index === ShowIndex && true}
            setShowIndex={() =>
              setShowIndex((probIndex) => (probIndex === index ? null : index))
            }
          />
        ))}

        {/* <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs{item.card.info.price / 100}
            </li>
          ))}
        </ul> */}
      </div>
      <div></div>
    </div>
  );
};

export default RestaurantMenu;
