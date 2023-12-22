import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

const Header = () => {
  return (
    <header>
      <Link to="/">PizzaApp</Link>
      <SearchOrder />
      <p>Shankar</p>
    </header>
  );
};

export default Header;
