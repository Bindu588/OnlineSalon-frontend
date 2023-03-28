import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign.css";
// import Navbar from "../../components/Navbar";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState();
  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
      const response = await axios.get(`http://localhost:8080/api/login?userName=${username}&password=${password}`).then(resp=>{ 
        alert("Login succesful");
        navigate('/customer/all');
      }).catch(error=>{
        setErrorMessage("Invalid username or password.");

      })
      console.log("Login successful:", response.data);
     
    }

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        {/* {
          loggedInUser !== null &&
          loggedInUser.role === 'Customer' ?
          navigate("/user/dashboard") :
          loggedInUser.role === 'Admin' ?
              navigate("/admin/dashboard") :


        } */}
        <div className="card mx-auto mt-5" id="login">
          <div className="card-header text-center">
            <h3 className="card-title">SignIn</h3>
          </div>
          <div className="card-body">
            <p>{ErrorMessage} </p>

            <form>
              <div className="registers">
                <div className="row mb-4">
                  <label className="col-3 col-form-label">UserName</label>
                  <div className="col-8">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="Enter username"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <label className="col-3 col-form-label">Password</label>
                  <div className="col-8">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter password"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    value="SignIn"
                    className="btn btn-sm btn-outline-primary mt-3"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
                <p>
                  Not Yet Registered ?{" "}
                  <Link to={"/signup"} className="login">
                    SignUp
                  </Link>{" "}
                  here{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

