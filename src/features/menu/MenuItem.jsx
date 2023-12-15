import React from 'react';

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingridients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingridients.join(',')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold Out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
