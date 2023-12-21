import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div>
      <p>
        <span>23 pizza</span>
        <span>$ 23.45</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
