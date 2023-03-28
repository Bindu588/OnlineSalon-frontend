import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function FetchAllCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/customer/all").then(resp => {
            setCustomers(resp.data);
        })
    },[])

    return (
        <div className='container'>
            <h2>All customers</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>CustomerId</th>
                        <th>Customer Name</th>
                        <th>Email Id</th>
                        <th>Password</th>
                        <th>ContactNo</th>
                        <th>Age</th> 
                    </tr>
                </thead>
                <tbody>
            {
                customers.map(c =>
                   <tr key={c.customerId}>
                        <td>{c.customerId}</td> 
                        <td>{c.name} </td>
                        <td>{c.email}</td> 
                        <td> {c.password} </td>
                        <td>{c.contactNo}</td> 
                        <td>{c.age}</td> 
                        
                        <td><Link to={`/customer/get/${c.customerId}`} className="btn btn-primary">View Details</Link></td>
                    </tr>
                    
                )
            }
            </tbody>
            </table>
            <Link to="/" className="btn btn-info">Back To Home</Link>
            <Link to='/customer/add' className='btn btn-info'>Next</Link>
            
        </div>
    )
}

export default FetchAllCustomers;