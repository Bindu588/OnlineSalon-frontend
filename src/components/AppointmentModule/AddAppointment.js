import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function AddAppointment() {

    const [alocation, setAlocation] = useState('');
    const [avisitType, setAvisitType] = useState('');
    const [apreferredDate, setApreferredDate] = useState('');
    const [apreferredTime, setApreferredTime] = useState('');
    const [astatus, setAstatus] = useState({});
    const [acustomerId, setAcustomerId] = useState({});
    const [asalonServiceId, setAsalonServiceId] = useState({});
    const [formErrors,setFormErrors] =useState({});
    const navigate=useNavigate();

    const saveAppointment = () => {

        let errors = {};

        if (!alocation) {
            errors['alocationError'] = "Appointment location is required";
        }
        if (!avisitType) {
            errors['avisitTypeError'] = "Appointment visitType is required";
        }
        if (!apreferredDate) {
            errors['apreferredDateError'] = "Appointment preferredDate is required";
        }
        if (!apreferredTime) {
            errors['apreferredTimeError'] = "Appointment preferredTime is required";
        }
        if (!astatus) {
            errors['astatusError'] = " status is required";
        }
        if (!acustomerId) {
            errors['acustomerIdError'] = "customerId is required";
        }
        if (!asalonServiceId) {
            errors['asalonServiceIdError'] = "salonServiceId is required";
        }
        
        
        
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
                location: alocation,
                visitType: avisitType,
                preferredDate: apreferredDate,
                preferredTime: apreferredTime,
                status:astatus,
                customer:{
                    customerId:acustomerId,
                },
                appointmentServices:[{ 
                    salonServiceId:asalonServiceId
                }
                ]
            }
            axios.post("http://localhost:8080/appointment/save", payload).then(resp => alert("Appointment saved"))
           
            .catch(error=>{
                console.log(error)
                alert(error.response.data)
            })
            navigate('/order/add')
            
        }
    }

    return (<div className="container">
        <h2>Add Appointment</h2>

        <div className="form-group">
            <label>location</label>
            <input type="text" name="alocation" value={alocation} onChange={event => setAlocation(event.target.value)} 
                className="form-control" />
                 { formErrors.alocationError && <p  style={{color: "red"}}>{formErrors.alocationError}</p>}
        </div>

        <div className="form-group">
            <label>visitType</label>
            <input type="text" name="avisitType" value={avisitType} onChange={event => setAvisitType(event.target.value)} 
            className="form-control" />
               { formErrors.avisitTypeError && <p  style={{color: "red"}}>{formErrors.avisitTypeError}</p>}
        </div>

        <div className="form-group">
            <label>preferredDate</label>
            <input type="date" name="apreferredDate" value={apreferredDate} onChange={event => setApreferredDate(event.target.value)} 
                className="form-control" />
                { formErrors.apreferredDateError && <p  style={{color: "red"}}>{formErrors.apreferredDateError}</p>}
         </div>


        <div className="form-group">
            <label>preferredTime</label>
            <input type="text" name="apreferredTime" value={apreferredTime} onChange={event => setApreferredTime(event.target.value)} 
                className="form-control" />
                { formErrors.apreferredTimeError && <p  style={{color: "red"}}>{formErrors.apreferredTimeError}</p>}
                </div>


        <div className="form-group">
            <label>status</label>
            <input type="text" name="astatus" value={astatus} onChange={event => setAstatus(event.target.value)} 
                className="form-control" />
                { formErrors.astatusError && <p  style={{color: "red"}}>{formErrors.astatusError}</p>}
        </div>

        <div className="form-group">
            <label>customerId</label>
            <input type="number" name="acustomerId" value={acustomerId} onChange={event => setAcustomerId(event.target.value)} 
            className="form-control" />
            { formErrors.acustomerIdError && <p  style={{color: "red"}}>{formErrors.acustomerIdError}</p>}
        </div>
        
        <div className="form-group">
            <label>salonServiceId</label>
            <input type="number" name="asalonServiceId" value={asalonServiceId} onChange={event => setAsalonServiceId(event.target.value)} 
            className="form-control" />
            { formErrors.asalonServiceIdError && <p  style={{color: "red"}}>{formErrors.asalonServiceIdError}</p>}
        </div>

        

        <button onClick={saveAppointment} className="btn btn-primary">Save</button>

        <div>
            <Link to="/appointment/all" className="btn btn-info">View All Appointments</Link>
            <Link to="/orderpage" className="btn btn-info">Next</Link>
        </div>

    </div>)

}

export default AddAppointment;