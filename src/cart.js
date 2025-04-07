import {  useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleclearcart = () => dispatch(clearCart());
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white p-1 rounded-lg hover:bg-slate-300 mt-2 mb-2"
          onClick={handleclearcart}
        >
          clear cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty add item to the cart!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
