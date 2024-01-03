// import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

const EmptyCart = () => {
  return (
    <div className="px-3 py-3">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
      <p className="mt-7  font-semibold">
        Your cart is still empty. Start adding some pizzas
      </p>
    </div>
  );
};

export default EmptyCart;
