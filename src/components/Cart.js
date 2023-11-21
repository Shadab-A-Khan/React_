import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const foods = useSelector((store) => store.items);

  const dispatch = useDispatch();
  const clearCartHandle = (order) => {
    dispatch(clearCart(order));
  };

  return (
    <div className="w-1/2 m-auto">
      <div className="font-bold text-4xl text-center p-[1rem] pl-[1.8rem] pt-[1.8rem] m-[1rem] w-3/12 ml-[18rem] shadow-[8px_8px_8px_-10px_rgba(0,0,0,0.9)]">
        Kitchen
      </div>
      {foods.length !== 0 && (
        <button
          className="ml-[85%] mb-[2rem] justify-center bg-red-700 text-white px-[1rem] text-lg hover:translate-y-1 hover:scale-95 rounded-lg shadow-[0_0_6px_black]"
          onClick={clearCartHandle}
        >
          Clear Cart
        </button>
      )}
      {foods.length === 0 && (
        <h1 className="ml-1 text-lg m-[10rem] mb-0">
          Nothing to Eat ?😔 , Let's get some food from Kitchen 😀
        </h1>
      )}
      <div className="flex">
      {foods.length === 0 && (<h1 className=" text-s text-gray-600 mb-1 mt-2.5 p-1 pr-3 shadow-[8px_8px_8px_-11px_rgba(0,0,0,0.9)] ">Let's go ➡️</h1>)}
      {foods.length === 0 && (
        <li className="w-14 list-none m-1 mt-2.5 p-1 pl-[0.4rem] bg-blue-500 text-white hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_1px_#adadad]">
          <Link to="/">Home</Link>
        </li>
      )}
</div>
      <ItemList items={foods} />

      <div className=" flex ml-2 m-[4rem]">
        <div className="shadow-[8px_8px_8px_-10px_rgba(0,0,0,0.3)]">
          {foods.length !== 0 && (
            <h1 className="ml-1 text-lg">
              items are ready{" "}
              <button className="ml-[1rem] bg-green-600 text-white px-[1rem] text-lg hover:translate-y-1 hover:scale-95 hover:shadow-[0_0_3px_black] rounded-lg shadow-[0_0_6px_black]">
                Order Now
              </button>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
