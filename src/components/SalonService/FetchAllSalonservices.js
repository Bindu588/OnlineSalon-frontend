import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function FetchAllSalonservices() {

    const [salonservices, setSalonservices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/salonservice/all").then(resp => {
            setSalonservices(resp.data);
        })
    }, [])

    return (
        <div className='container'>
            <h2>All Salonservices</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>salonServiceId</th>
                        <th>salonServiceName</th>
                        <th>salonServicePrice</th>
                        <th>salonServiceduration</th>
                        <th>discount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salonservices.map(s =>
                            <tr key={s.salonServiceId}>
                                <td>{s.salonServiceId}</td>
                                <td> {s.salonServiceName}</td>
                                <td>{s.salonServicePrice}</td>
                                <td>{s.salonServiceduration}</td>
                                <td>{s.discount}</td>
                                <td><Link to={`/salonservice/get/${s.salonServiceId}`} className="btn btn-primary">View Details</Link></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

            <Link to="/customer/add" className="btn btn-info">Add Customer</Link>
            <Link to="/salonservice/add" className="btn btn-info">Next</Link>
        </div>
    )
}

export default FetchAllSalonservices;