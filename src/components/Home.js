import React from 'react';
import { Form, Link } from 'react-router-dom';
import SearchAppointment from './AppointmentModule/SearchAppointment';
import SearchSalonservice from './SalonService/SearchSalonservice';
import SearchCustomer from './CustomerModule/SearchCustomer';
import SearchOrder from './OrderModule/SearchOrder';
import Login from '../screen/Auth/Login';
import SignUp from '../screen/Auth/Register';
import {Nav,Navbar,Container} from "react-bootstrap";

function Home() {

    return (<div>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Online Salon Service</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        {/* <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
        <Nav.Link as={Link} to="/login">Sign in</Nav.Link> */}
        <Nav.Link as={Link} to="/customerpage">Customer Page</Nav.Link>
        <Nav.Link as={Link} to="/salonservicepage">SalonService Page</Nav.Link>
        <Nav.Link as={Link} to="/appointmentpage">Appointment Page</Nav.Link>
        <Nav.Link as={Link} to="/orderpage">Order Page</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>







  





        {/* <h1>Online Salon Service</h1>
        <div>
           <Login />
        </div>
        &nbsp;&nbsp;
        
        <div>
           <SignUp/>
        </div>
        &nbsp;&nbsp; */}
        {/* <div>
            <SearchCustomer/>
        </div>
        <div>
            <Link to="/customer/all">View All Customers</Link>
        </div>
        <div>
            <Link to="/customer/add">Add New Customer</Link>
        </div>
        &nbsp;&nbsp;
        
        <div>
            <SearchSalonservice/>
        </div>
        <div>
            <Link to="/salonservice/all">View All Salonservices</Link>
        </div>
        <div>
            <Link to="/salonservice/add">Add New Salonservice</Link>
        </div>
        &nbsp;&nbsp;

        <div>
            <SearchAppointment/>
        </div>
        <div>
            <Link to="/appointment/all">View All Appointments</Link>
        </div>
        <div>
            <Link to="/appointment/add">Add New Appointment</Link>
        </div>
        &nbsp;&nbsp;

        <div>
            <SearchOrder/>
        </div>        

        <div>
            <Link to="/order/all">View All Orders</Link>
        </div>
        <div>
            <Link to="/order/add">Add New Order</Link>
        </div> */}
        
    </div>)
}

export default Home;