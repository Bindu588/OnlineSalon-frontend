import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

function FetchSalonservice() {

    const[salonservice,setSalonservice] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8080/salonservice/"+id).then(resp=> {
            setSalonservice(resp.data);
        })
    },[])

    return(<div className='container'>
        <h1>Salonservice Details</h1>
        {
            salonservice !== null && 
                <div>
                    <p>Id: {salonservice.salonServiceId}</p>
                    <p>Name: {salonservice.salonServiceName}</p>
                    <p>Price: {salonservice.salonServicePrice}</p>
                    <p>duration: {salonservice.salonServiceduration}</p>
                    <p>discount: {salonservice.discount}</p>
                </div>
        }
         <Link to="/" className="btn btn-info">Back To Home</Link>
    </div>)
}

export default FetchSalonservice;