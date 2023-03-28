import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import profiledb from "../../assets/profiledb.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions/LoginAction";
import Login from "../Login";
 
function AdminDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
   
 
    const doLogout = () => {
       dispatch(logOut())
       navigate("/")
      }
      if(myuser === null){
       return <Login/>
      }
 
    return (
        <div>
 
           
            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={logo} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '6%',marginLeft: 400 }} /></Link>
               
                <button onClick={doLogout} className=" btn-light" >LogOut</button>
            </nav>
            <center>
                <div>
 
                    <Link to={`/salonservice/add`} className="btn  btn-block btn-outline-dark" style={{ marginTop: 120 }}>Add salonservice</Link>
                </div>
                <div>
                    <Link to={`/appointment/add`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>Add Appointments</Link>
                </div>
                <div>
                    <Link to={`/order/add`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>Add Orders</Link>
                </div>
                <div>
                    <Link to={`/salonservice/all`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>All Salonservices</Link>
                </div>
                <div>
                    <Link to={`/appointment/all`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>All Appointments</Link>
                </div>
                <div>
                    <Link to={`/order/all`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>All Orders</Link>
                </div>
               
                <div style={{ marginTop: '50px' }}>
                    <Footer />
 
                </div>
            </center>
 
        </div>
    )
}

export default AdminDashboard;