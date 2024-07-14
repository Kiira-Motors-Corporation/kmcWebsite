import { useContext } from 'react';
import { OrderContext } from './OrderContext';

const DisplayPage = () => {
  const { orders, orderCount, removeOrder } = useContext(OrderContext);

  const renderOrders = (orderArray, arrayName) => {
    return orderArray.map((orderItem, index) => (
      <div key={index}>
        <p>Name: {orderItem.name}</p>
        <p>Email: {orderItem.email}</p>
        <p>Exterior Color: {orderItem.exteriorColor}</p>
        <button onClick={() => removeOrder(orderItem.id, arrayName)}>Remove Order</button>
      </div>
    ));
  };

  return (
    <div>
      <h1>Display Page</h1>
      <p>Total Orders: {orderCount}</p>
      <h2 className='font-bold'>First Array</h2>
      {renderOrders(orders.firstArray, 'firstArray')}
      <h2 className='font-bold'>Second Array</h2>
      {renderOrders(orders.secondArray, 'secondArray')}
    </div>
  );
};

export default DisplayPage;
