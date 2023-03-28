import React, { useState } from 'react';
import axios from 'axios';
function SearchCustomer() {

    const [customerId, setCustomerId] = useState('');
    const [customer, setCustomer] = useState(null);
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!customerId) {
            errors['customerIdError'] = 'CustomerId is required';
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0

        if (noErrors) {
            axios.get("http://localhost:8080/customer/" + customerId).then(resp => {
                setCustomer(resp.data)
            }).catch(error => {
                setCustomer(null);
                setMessage(error.response.data)
            })
        }
    }

    return (
        <div>
            <div>
                <label>Customer Id</label>
                <input type="text" name="customerId" value={customerId} onChange={e => setCustomerId(e.target.value)} />
                { formErrors.customerIdError && <p  style={{color: "red"}}>{formErrors.customerIdError}</p>}
            </div>
            <div>
                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                customer != null ?
                    <div>
                        <p>Id: {customer.customerId}</p>
                        <p>Name: {customer.name}</p>
                        <p>Email: {customer.email}</p>
                        <p>Password: {customer.password}</p>
                        <p>ContactNo: {customer.contactNo}</p>
                        <p>Age: {customer.age}</p>
                        <p>DoorNo: {customer.doorNo}</p>
                        <p>Area: {customer.area}</p>
                        <p>City: {customer.city}</p>
                        <p>State: {customer.state}</p>
                        <p>Pincode: {customer.pincode}</p>


                    </div>
                    : <div>
                        <h3>{message}</h3>
                    </div>
            }

        </div>
    )
}

export default SearchCustomer;