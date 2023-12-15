// Test ID : IIDAST

import { calcMinutes } from '../../utils/helpers';
const order = {
  id: 'ABCDEF',
  customer: 'Shankar',
  phone: '234567',
  address: 'Lamachaur, Pokhara, Nepal',
  priority: true,
  estimatedDeliver: '2027-94-25T10:00:00',
  cart: [
    {
      pizzaId: 7,
      name: 'Napoli',
      quantity: 4,
      unitPrice: 17,
      totalPrice: 68,
    },
    {
      pizzaId: 5,
      name: 'Romana',
      quantity: 2,
      unitPrice: 15,
      totalPrice: 30,
    },
    {
      pizzaId: 3,
      name: 'Diavola',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19,
};

const Order = () => {
  // Everyone can search all orders so for privacy reason we are going to exclude the names or address, these are only for the staff,

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutes(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
};

export default Order;
