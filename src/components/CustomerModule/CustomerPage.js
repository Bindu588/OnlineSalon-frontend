import { Link, useNavigate } from "react-router-dom";

function CustomersPage() {
  const navigate=useNavigate();
    return (
        <div>
          <h1>Customers Page</h1>
          <Link to="/customer/all">View All Customers</Link>
          &nbsp;&nbsp;
          <Link to="/customer/add">Add New Customer</Link>

        </div>
        
      );
}
export default CustomersPage;