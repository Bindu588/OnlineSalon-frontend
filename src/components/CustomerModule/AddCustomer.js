import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function AddCustomer() {

    const [cname, setCname] = useState('');
    const [cemail, setCemail] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [ccontactNo, setCcontactNo] = useState('');
    const [cage, setCage] = useState('');
    const [cdoorNo,setCdoorNo] = useState('');
    const [carea,setCarea] = useState('');
    const [ccity,setCcity] = useState('');
    const [cstate,setCstate] = useState('');
    const [cpincode,setCpincode] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate();

    const saveCustomer = () => {

        let errors = {};
        if (!cname) {
            errors['cnameError'] = "Customer Name is required";
        }
        if (!cemail) {
            errors['cemailError'] = "Customer email is required";
        }
        if (!cpassword) {
            errors['cpasswordError'] = "password is required";
        }
        if (!ccontactNo) {
            errors['ccontactNoError'] = "ContactNo is required";
        }
        if (!cage) {
            errors['cageError'] = "Age is required";
        }
        // if (cage) {
        //     errors['cageNoError'] = "Age should be positive";
        // }

        if (!cdoorNo) {
            errors['cdoorNoError'] = "Enter your door No.";
        }
        if (!carea) {
            errors['careaError'] = "Enter your Area";
        }
        if (!ccity) {
            errors['ccityError'] = "Enter your City";
        }
        if (!cstate) {
            errors['cstateError'] = "Enter your State";
        }
        if (!cpincode) {
            errors['cpincodeError'] = "Enter your pincode";
        }
        
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
            name: cname,
            email: cemail,
            password:cpassword,
            contactNo:ccontactNo,
            age:cage,
            address: {
                doorNo:cdoorNo ,
                area: carea,
                city: ccity,
                state: cstate,
                pincode: cpincode
            }
        }
        axios.post("http://localhost:8080/customer/save", payload).then(resp => alert("customer saved"));
        navigate('/salonservice/add');
    }
}

    return (<div className="container">
        <h2>Add Customer</h2>

        <div className="form-group">
            <label>Name</label>
            <input type="text" name="cname" value={cname} onChange={event => setCname(event.target.value)} 
            className="form-control" />
                 { formErrors.cnameError && <p  style={{color: "red"}}>{formErrors.cnameError}</p>}
        </div>
        <div className="form-group">
            <label> Email</label>
            <input type="text" name="cemail" value={cemail} onChange={event => setCemail(event.target.value)}
            className="form-control"  />
            { formErrors.cemailError && <p  style={{color: "red"}}>{formErrors.cemailError}</p>}
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="text" name="cpassword" value={cpassword} onChange={event => setCpassword(event.target.value)} 
             className="form-control"/>
             { formErrors.cpasswordError && <p  style={{color: "red"}}>{formErrors.cpasswordError}</p>}
        </div>
        <div className="form-group">
            <label>ContactNo</label>
            <input type="text" name="ccontactNo" value={ccontactNo} onChange={event => setCcontactNo(event.target.value)} 
             className="form-control"/>
             { formErrors.ccontactNoError && <p  style={{color: "red"}}>{formErrors.ccontactNoError}</p>}
        </div>
        <div className="form-group">
            <label>Age</label>
            <input type="number" min="1" max=" "name="cage" value={cage} onChange={event => setCage(event.target.value)} 
             className="form-control"/>
            { formErrors.cageError && <p  style={{color: "red"}}>{formErrors.cageError}</p>}

        </div>
        <div className="form-group">
            <label>Door No</label>
            <input type="text" name="cdoorNo" value={cdoorNo} onChange={event => setCdoorNo(event.target.value)} 
             className="form-control"/>
            { formErrors.cdoorNoError && <p  style={{color: "red"}}>{formErrors.cdoorNoError}</p>}

        </div>
        <div className="form-group">
            <label>Area</label>
            <input type="text" name="carea" value={carea} onChange={event => setCarea(event.target.value)} 
             className="form-control"/>
            { formErrors.careaError && <p  style={{color: "red"}}>{formErrors.careaError}</p>}

        </div>
        <div className="form-group">
            <label>City</label>
            <input type="text" name="ccity" value={ccity} onChange={event => setCcity(event.target.value)} 
             className="form-control"/>
            { formErrors.ccityError && <p  style={{color: "red"}}>{formErrors.ccityError}</p>}

        </div>
        <div className="form-group">
            <label>State</label>
            <input type="text" name="cstate" value={cstate} onChange={event => setCstate(event.target.value)} 
             className="form-control"/>
            { formErrors.cstateError && <p  style={{color: "red"}}>{formErrors.cstateError}</p>}

        </div>
        <div className="form-group">
            <label>Pincode</label>
            <input type="text" name="cpincode" value={cpincode} onChange={event => setCpincode(event.target.value)}
             className="form-control" />
            { formErrors.cpincodeError && <p  style={{color: "red"}}>{formErrors.cpincodeError}</p>}

        </div>

        <button onClick={saveCustomer} className="btn btn-primary">Save</button>
         <div>
        <Link to="/customer/all" className="btn btn-info">View All Customers</Link>
        <Link to='/salonservicepage' className='btn btn-info'>Next</Link>
        </div>
    </div>)

}

export default AddCustomer;