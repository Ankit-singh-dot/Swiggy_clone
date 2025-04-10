import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useonilneStatus";
import UserContext from "../utils/UserContext.js";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const OnlineStatus = useOnlineStatus();
  const { LoggedInUser } = useContext(UserContext);
  console.log(LoggedInUser);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-white shadow-md">
      <div className="logo-container">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/36/29/56/1000_F_236295604_5cTJm2Ksy8F4l2iIo9QrCmc5O1tbs8yo.jpg"
          className="logo size-28 rounded-xl shadow-md mt-1 ml-2 mb-1 shadow-gray-400 transition-transform duration-100 ease-in-out hover:scale-110 "
        ></img>
      </div>
      <div className="flex items-center px-4 mt-4 ">
        <ul className="flex ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">Online status :{OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">contact us</Link>
          </li>
          <li className="px-4 font-bold flex">
            <Link to="/cart"> Cart-({cartItems.length})</Link>
            <img
              className="size-8 my-0"
              src="https://t4.ftcdn.net/jpg/02/66/71/71/360_F_266717164_J8Fqw4OcXRkKtNwFyHD02zIEsxPI7qHH.jpg"
            ></img>
          </li>
          <button
            className="login mb-5"
            onClick={() => {
              setBtnNameReact((preview) =>
                preview === "login" ? "logout" : "login"
              );
            }}
          >
            {btnNameReact}
          </button>
          <li className="font-bold">: {LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
