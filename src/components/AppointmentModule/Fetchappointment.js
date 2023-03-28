import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

function FetchAppointment() {

    const[appointment,setAppointment] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8080/appointment/"+id).then(resp=> {
            setAppointment(resp.data);
        })
    },[])

    return(<div className='container'>
        <h1>Appointment Details</h1>
        {
            appointment !== null && 
            <div>
            <p>Id: {appointment.appointmentId}</p>
            <p>location: {appointment.location}</p>
            <p>visitType: {appointment.visitType}</p>
            <p>preferredDate: {appointment.preferredDate}</p>
            <p>preferredTime: {appointment.preferredTime}</p>
            <p>status: {appointment.status}</p>
            
        </div> 
        }
         <Link to="/" className="btn btn-info">Back To Home</Link>
    </div>)
}

export default FetchAppointment;
