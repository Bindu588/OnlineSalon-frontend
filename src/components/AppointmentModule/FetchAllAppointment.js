import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchAllAppointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/appointment/all").then(resp => {
            setAppointments(resp.data);
        })
    }, [])

    return (
        <div className='container'>
            <h2>All Appointments</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>location</th>
                        <th>visitType</th>
                        <th>preferredDate</th>
                        <th>preferredTime</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(a =>
                            <tr key={a.appointmentId}>
                                <td>{a.appointmentId}</td>
                                <td> {a.location}</td>
                                <td>{a.visitType}</td>
                                <td>{a.preferredDate}</td>
                                <td> {a.preferredTime}</td>
                                <td>{a.status}</td>
                                <td><Link to={`/appointment/get/${a.appointmentId}`} className="btn btn-primary">View Details</Link></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
               <Link to="/salonservice/add" className="btn btn-info">Salon service add</Link>
               <Link to='/appointment/add' className='btn btn-info'>Next</Link>
        </div>
    )
}

export default FetchAllAppointments;