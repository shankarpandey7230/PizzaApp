import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

const CartOverview = () => {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  // console.log(totalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="sm:px- flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-400 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
