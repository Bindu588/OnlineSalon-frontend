import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';

function AddOrder() {

    const [oamount, setOamount] = useState('');
    const [obillingDate, setObillingDate] = useState('');
    const [oappointmentId, setOappointmentId] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate();
    const saveOrder = () => {

            let errors = {};
    
            if (!oamount) {
                errors['oamountError'] = "Amount is required";
            }
            
            if (!obillingDate) {
                errors['obillingDateError'] = "Billing Date  is required";
            }
            
            if (!oappointmentId) {
                errors['oappointmentIdError'] = "AppointmentId  is required";
            }
            
            
    
            setFormErrors(errors);
    
            const noErrors = Object.keys(errors).length === 0;
    
            if (noErrors) {
                const payload = {
                    amount: oamount,
                    billingDate: obillingDate,
                    appointment: {
                        appointmentId: oappointmentId
                    }
                }
                axios.post("http://localhost:8080/order/save", payload).then(resp => alert("Order saved"))
                    .catch(error => {
                        console.log(error)
                        alert(error.response.data)
                    })
                    navigate('/order/all')
            }
        }

    return (<div className="container">
        <h2>Add Order</h2>

        <div className="form-group">
            <label>Order Amount</label>
            <input type="number" name="oamount" value={oamount} onChange={event => setOamount(event.target.value)} 
                className="form-control" />
                { formErrors.oamountError && <p  style={{color: "red"}}>{formErrors.oamountError}</p>} 
            </div>
        <div className="form-group">
            <label>Billing Date</label>
            <input type="date" name="obillingDate" value={obillingDate} onChange={event => setObillingDate(event.target.value)} 
               className="form-control" />
               { formErrors.obillingDateError && <p  style={{color: "red"}}>{formErrors.obillingDateError}</p>}
        </div>
        <div className="form-group">
            <label>Appointment Id</label>
            <input type="number" name="oappointmentId" value={oappointmentId} onChange={event => setOappointmentId(event.target.value)} 
               className="form-control" />
               { formErrors.oappointmentIdError && <p  style={{color: "red"}}>{formErrors.oappointmentIdError}</p>}
        </div>

        <button onClick={saveOrder}  className="btn btn-primary">Save</button>

        <Link to="/order/all"  className="btn btn-info">View All Orders</Link>
        <Link to="/"  className="btn btn-info">Logout</Link>

    </div>)

}

export default AddOrder;