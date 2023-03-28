import { Link } from 'react-router-dom';

function OrdersPage() {
  return (
    <div>
      <h1>Orders Page</h1>
      <Link to="/order/all">View All Orderss</Link>
      &nbsp;&nbsp;
      <Link to="/order/add">Add New Order</Link>
    </div>
  );
}
export default OrdersPage;