import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
      <Link to="/menu">&larr; Back to Menu</Link>
      <p>Your cart is still empty. Start adding some pizzas</p>
    </div>
  );
};
