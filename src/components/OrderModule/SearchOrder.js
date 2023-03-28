import React, { useState } from 'react';
import axios from 'axios';
function SearchOrder() {

    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!orderId) {
            errors['orderIdError'] = 'OrderId is required';
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0

        if (noErrors) {
            axios.get("http://localhost:8080/order/" + orderId).then(resp => {
                setOrder(resp.data)
            }).catch(error => {
                setOrder(null);
                setMessage(error.response.data)
            })
        }
    }

    return (
        <div>
            <div>
                <label>Order Id</label>
                <input type="text" name="orderId" value={orderId} onChange={e => setOrderId(e.target.value)} />
                { formErrors.orderIdError && <p  style={{color: "red"}}>{formErrors.orderIdError}</p>}
            </div>
            <div>
                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                order != null ?
                    <div>
                        <p>Id: {order.orderId}</p>
                        <p>Amount: {order.Amount}</p>
                        <p>BillingDate: {order.BillingDate}</p>
                        
                    </div>
                    : <div>
                        <h3>{message}</h3>
                    </div>
            }

        </div>
    )
}

export default SearchOrder;