import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function FetchAllOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/order/all").then(resp => {
            setOrders(resp.data);
        })
    },[])

    return (

        <div className='container'>
            <h2>All Orders</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>OrderId</th>
                        <th>Amount</th>
                        <th>Billing Date</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(o =>
                            <tr key={o.orderId}>
                                <td>{o.orderId}</td>
                                <td>{o.amount}</td>
                                <td>{o.billingDate}</td>
                                <td><Link to={`/order/get/${o.orderId}`} className="btn btn-primary"> View Details</Link></td>
                            
                            </tr>
                        )
                    }
            </tbody>
            </table>
               <Link to='/salonservice/add' className='btn btn-info'>Salonservice Add</Link>
               <Link to="/order/add"  className="btn btn-info">Next</Link>
            
        </div>
    )
}

export default FetchAllOrders;