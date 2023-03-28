import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import FetchAllCustomers from './components/CustomerModule/FetchAllCustomers';
import FetchCustomer from './components/CustomerModule/FetchCustomer';
import AddCustomer from './components/CustomerModule/AddCustomer';
import FetchSalonservice from './components/SalonService/FetchSalonservice';
import AddSalonservice from './components/SalonService/AddSalonservice';
import FetchAllSalonservices from './components/SalonService/FetchAllSalonservices';
import FetchAllAppointments from './components/AppointmentModule/FetchAllAppointment';
import FetchAppointment from './components/AppointmentModule/Fetchappointment';
import AddAppointment from './components/AppointmentModule/AddAppointment';
import FetchAllOrders from './components/OrderModule/FetchAllOrders';
import FetchOrder from './components/OrderModule/FetchOrder';
import AddOrder from './components/OrderModule/AddOrder';
import Home from './components/Home';
import Login from './screen/Auth/Login';
//import Customer from './components/Navbar';
import Register from './screen/Auth/Register';
import AppointmentsPage from './components/AppointmentModule/AppointmentHome';
import CustomersPage from './components/CustomerModule/CustomerPage';
import SalonServicesPage from './components/SalonService/SalonServicesPage';
import OrdersPage from './components/OrderModule/OrdersPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          {/* <Route path="/Navbar" element={<Navbar />} /> */}
          
          <Route path="/appointment/all" element={<FetchAllAppointments />} />
          <Route path="/appointment/get/:id" element={<FetchAppointment />} />
          <Route path="/appointment/add" element={<AddAppointment />} />
          <Route path="/appointmentpage" element={<AppointmentsPage />} />

          <Route path="/order/all" element={<FetchAllOrders />} />
          <Route path="/order/get/:id" element={<FetchOrder />} />
          <Route path="/order/add" element={<AddOrder />} />
          <Route path="/orderpage" element={<OrdersPage />} />
      
          <Route path="/salonservice/all" element={<FetchAllSalonservices />} />
          <Route path="/salonservice/get/:id" element={<FetchSalonservice />} />
          <Route path="/salonservice/add" element={<AddSalonservice />} />
          <Route path="/salonservicepage" element={<SalonServicesPage />} />

          <Route path="/customer/all" element={<FetchAllCustomers />} />
          <Route path="/customer/get/:id" element={<FetchCustomer />} />
          <Route path="/customer/add" element={<AddCustomer />} />
          <Route path="/customerpage" element={<CustomersPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





// import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom';
// import FetchAllCustomers from './components/CustomerModule/FetchAllCustomers';
// import FetchCustomer from './components/CustomerModule/FetchCustomer';
// import AddCustomer from './components/CustomerModule/AddCustomer';
// import FetchSalonservice from './components/SalonService/FetchSalonservice';
// import AddSalonservice from './components/SalonService/AddSalonservice';
// import FetchAllSalonservices from './components/SalonService/FetchAllSalonservices';
// import FetchAllAppointments from './components/AppointmentModule/FetchAllAppointment';
// import FetchAppointment from './components/AppointmentModule/Fetchappointment';
// import AddAppointment from './components/AppointmentModule/AddAppointment';
// import FetchAllOrders from './components/OrderModule/FetchAllOrders';
// import FetchOrder from './components/OrderModule/FetchOrder';
// import AddOrder from './components/OrderModule/AddOrder';
// import Home from './components/Home';
// import Login from './screen/Auth/Login';
// import SignUp from './screen/Auth/SignUp';
// import Customer from './components/Customer';


// function App() {
//   return (
//     <div>
    
      
    
//     <BrowserRouter>
     
  
     
//       <Routes>

//       <Route path="/" element={<Home />} />
//       <Route exact path='/Login' component={Login} />
//       <Route path ='/Signup' component={SignUp}/>
//          <Route path ='/Customer' element={Customer}/>
 
//         {/* <h2>AppointmentModule</h2> */}
//         <Route path="/appointment/all" element={<FetchAllAppointments />} />
//         <Route path="/appointment/get/:id" element={<FetchAppointment />} />
//         <Route path="/appointment/add" element={<AddAppointment />} />
        
//         {/* <h2>Order Module</h2> */}
//         <Route path="/order/all" element={<FetchAllOrders />} />
//         <Route path="/order/get/:id" element={<FetchOrder />} />
//         <Route path="/order/add" element={<AddOrder />} />
      
//         <Route path="/salonservice/get/:id" element={<FetchSalonservice />} />
//         <Route path="/salonservice/all" element={<FetchAllSalonservices />} />
//         <Route path="/salonservice/add" element={<AddSalonservice />} />

//         <Route path="/customer/all" element={<FetchAllCustomers />} />
//         <Route path="/customer/get/:id" element={<FetchCustomer />} />
//         <Route path="/customer/add" element={<AddCustomer />} />
        
       
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;