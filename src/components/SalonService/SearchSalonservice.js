import React, { useState } from 'react';
import axios from 'axios';
function SearchSalonservice() {

    const [salonserviceId, setSalonserviceId] = useState('');
    const [salonservice, setSalonservice] = useState(null);
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = () => {

        let errors = {};

        if (!salonserviceId) {
            errors['salonserviceIdError'] = 'SalonserviceId is required';
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0

        if (noErrors) {
            axios.get("http://localhost:8080/salonservice/" + salonserviceId).then(resp => {
                setSalonservice(resp.data)
            }).catch(error => {
                setSalonservice(null);
                setMessage(error.response.data)
            })
        }
    }

    return (
        <div>
            <div>
                <label>Salonservice Id</label>
                <input type="text" name="salonserviceId" value={salonserviceId} onChange={e => setSalonserviceId(e.target.value)} />
                { formErrors.salonserviceIdError && <s  style={{color: "red"}}>{formErrors.salonserviceIdError}</s>}
            </div>
            <div>
                <button onClick={handleSubmit}>Search</button>
            </div>

            {
                salonservice != null ?
                    <div>
                        <p>Id: {salonservice.salonServiceId}</p>
                        <p>Name: {salonservice.salonServiceName}</p>
                        <p>Price: {salonservice.salonServicePrice}</p>
                        <p>duration: {salonservice.salonServiceduration}</p>
                        <p>discount: {salonservice.discount}</p>
                    </div>
                    : <div>
                        <h3>{message}</h3>
                    </div>
            }

        </div>
    )
}

export default SearchSalonservice;