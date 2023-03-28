import { Link } from 'react-router-dom';

function AppointmentsPage() {
  return (
    <div>
      <h1>Appointments Page</h1>
      <Link to="/appointment/all">View All Appointments</Link>
      &nbsp;&nbsp;
      <Link to="/appointment/add">Add New Appointment</Link>
    </div>
  );
}
export default AppointmentsPage;