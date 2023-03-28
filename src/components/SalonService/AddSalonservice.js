import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function AddSalonservice() {

    const [sname, setSname] = useState('');
    const [sprice, setSprice] = useState('');
    const [sduration, setSduration] = useState('');
    const [sdiscount, setSdiscount] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate();
    const saveSalonservice = () => {

        let errors = {};

        if (!sname) {
            errors['snameError'] = "salonService Name is required";
        }
        if (!sprice) {
            errors['spriceError'] = "salonService Price is required";
        }
        if (!sduration) {
            errors['sdurationError'] = "salonService duration is required";
        }
        if (!sdiscount) {
            errors['sdiscountError'] = " saloneService discount is required";
        }
        if (sprice < 0) {
            errors['spriceError'] = "salonService Price should be positive";
        }
        
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
                salonServiceName: sname,
                salonServicePrice: sprice,
                salonServiceduration:sduration,
                discount:sdiscount,
                
            }
            axios.post("http://localhost:8080/salonservice/save", payload).then(resp => alert("Salonservice saved"));
            navigate('/appointment/add');
        }
    }

    return (<div className="container">
        <h2>Add Salonservice</h2>

        <div className="form-group">
            <label>salonService Name</label>
            <input type="text" name="sname" value={sname} onChange={event => setSname(event.target.value)}
                className="form-control" />
                 { formErrors.snameError && <p  style={{color: "red"}}>{formErrors.snameError}</p>}
        </div>

        <div className="form-group">
            <label>salonService Price</label>
            <input type="number" name="sprice" value={sprice} onChange={event => setSprice(event.target.value)}
                className="form-control" />
               { formErrors.spriceError && <p  style={{color: "red"}}>{formErrors.spriceError}</p>}
        </div>

        <div className="form-group">
            <label>salonService duration</label>
            <input type="hour" name="sduration" value={sduration} onChange={event => setSduration(event.target.value)}
                className="form-control" />
                { formErrors.spriceError && <p  style={{color: "red"}}>{formErrors.spriceError}</p>}
        </div>

        <div className="form-group">
            <label>discount</label>
            <input type="number" name="sdiscount" value={sdiscount} onChange={event => setSdiscount(event.target.value)}
                className="form-control" />
                { formErrors.spriceError && <p  style={{color: "red"}}>{formErrors.spriceError}</p>}
        </div>

        <button onClick={saveSalonservice} className="btn btn-primary">Save</button>

        <div>
            <Link to="/salonservice/all" className="btn btn-info">View All Services</Link>
            <Link to='/appointmentpage' className='btn btn-info'>Next</Link>
        </div>

    </div>)

}

export default AddSalonservice;