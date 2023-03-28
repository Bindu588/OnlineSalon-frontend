import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle ={

     color:"White",
    
     textDecoration:"none",
  };
  return (
    <div>
            {/* <img
            src="https://api.logo.com/api/v2/images?logo=logo_91db85db-6c0b-4794-bbc0-1f7e1e0bd1ff&format=webp&margins=0&quality=60&width=500&background=transparent&u=1679682887"
            className="logo"></img> */}
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link style={navStyle} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to="/register">Register</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to="/login">Login</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to="/order/all">Fetch All Orders</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to="/salonservice/all">Fetch All SalonServices</Link>
                    </li>
                    <li>
                        <Link style={navStyle} to="/customer/all">Fetch All Customers</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )


}

export default Navbar;
