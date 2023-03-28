import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

function FetchOrder() {

    const[order,setOrder] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8080/order/"+id).then(resp=> {
            setOrder(resp.data);
        })
    },[])

    return(<div>
        <h1>Order Details</h1>
        {
            order !== null && 
                <div>
                    <p>Id: {order.orderId}</p>
                    <p>Amount: {order.amount}</p>
                    <p>BillingDate: {order.billingDate}</p>

                    
                </div>
        }
         <Link to="/"  className="btn btn-info">Back To Home</Link>
    </div>)
}

export default FetchOrder;
