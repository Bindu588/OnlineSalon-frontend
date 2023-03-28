import { Link } from 'react-router-dom';

function SalonServicesPage() {
  return (
    <div>
      <h1>SalonServices Page</h1>
      <Link to="/salonservice/all">View All SalonServices</Link>
      &nbsp;&nbsp;
      <Link to="/salonservice/add">Add New Service</Link>
    </div>
  );
}
export default SalonServicesPage;