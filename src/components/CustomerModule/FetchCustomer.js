import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
function FetchCustomer() {

    const[customer,setCustomer] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8080/customer/"+id).then(resp=> {
            setCustomer(resp.data);
        })
    },[])

    return(<div className='container'>
        <h1>Customer Details</h1>
        {
           customer !== null && 
                <div>
                    <p>Id: {customer.customerId}</p>
                    <p>Name: {customer.name}</p>
                    <p>Email: {customer.email}</p>
                    <p>Password: {customer.password}</p>
                    <p>ContactNo: {customer.contactNo}</p>
                    <p>Age: {customer.age}</p>
                    <p>DoorNo:{ customer.address.doorNo}</p>
                    <p>Area:{customer.address.area}</p>
                    <p>City: {customer.address.city}</p>
                    <p>State: {customer.address.state}</p>
                    <p>Pincode: {customer.address.pincode}</p>

                </div>
        }
          <Link to="/" className="btn btn-info">Back To Home</Link>
          {/* <button onClick={() => navigate(-1)} className="btn btn-light">Back</button> */}
    </div>)
}

export default FetchCustomer;