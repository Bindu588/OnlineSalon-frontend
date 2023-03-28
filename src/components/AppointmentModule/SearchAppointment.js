import React, { useState } from 'react';
import axios from 'axios';
function SearchAppointment() {

    const [appointmentId, setAppointmentId] = useState('');
    const [appointment, setAppointment] = useState(null);
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!appointmentId) {
            errors['appointmentIdError'] = 'AppointmentId is required';
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0

        if (noErrors) {
            axios.get("http://localhost:8080/appointment/" + appointmentId).then(resp => {
                setAppointment(resp.data)
            }).catch(error => {
                setAppointment(null);
                setMessage(error.response.data)
            })
        }
    }

    return (
        <div>
            <div>
                <label>Appointment Id</label>
                <input type="text" name="appointmentId" value={appointmentId} onChange={e => setAppointmentId(e.target.value)} />
                { formErrors.appointmentIdError && <p  style={{color: "red"}}>{formErrors.appointmentIdError}</p>}
            </div>
            <div>
                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                appointment != null ?
                <div>
                <p>Id: {appointment.appointmentId}</p>
                <p>location: {appointment.location}</p>
                <p>visitType: {appointment.visitType}</p>
                <p>preferredDate: {appointment.preferredDate}</p>
                <p>preferredTime: {appointment.preferredTime}</p>
                <p>status: {appointment.status}</p>
                
            </div> 
                    : <div>
                        <h3>{message}</h3>
                    </div>
            }

        </div>
    )
}

export default SearchAppointment;