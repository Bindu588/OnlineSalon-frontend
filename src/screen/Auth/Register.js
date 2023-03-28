import react, { useState, useEffect } from "react";
import { Link,useNavigate } from  "react-router-dom";
import "../Auth/sign.css"
import axios from "axios";
import Customer from "../../components/Navbar";

function Register() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
const options = [
  // { label: 'Role', value: '' },
  { label: 'ADMIN', value: 'admin' },
  { label: 'CUSTOMER', value: 'customer' },
];
   // const[mobileNumber,setMobileNmber] = useState("");
    const[role, setRole] = useState("");
    const navigate=useNavigate();

    const[errors, setErrors] = useState({});
    // const nameRegex = /^[a-ZA-Z]+$/;

    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        let validationErrors = {};

        // if(!userName){
        //     validationErrors.userName = "username can not be empty";
        // } else if(!nameRegex.test(userName)){
        //     validationErrors.userName = "username can only contain alaphabets";
        // }

        if(!password){
            validationErrors.password = "password can not be empty";
         }
         setErrors(validationErrors);

         if(Object.keys(validationErrors).length === 0){
            const user = { username, password, role };
            axios
            .post("http://localhost:8080/api/register", user)
            .then((response) => {
                console.log(response.data);
                alert("your registration successful");
            })
            navigate('/home')
            .catch((error) => {
                alert(error.message);
            });
         }
};

return (
    <div>
      {/* <Customer /> */}

      <div className="card mx-auto mt-5" id="register">
        <div className="card-header text-center">
          <h3 className="card-title">SignUp</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="registers">
              <div className="row mb-4">
                <label className="col-3 col-form-label">UserName</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="userName"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="form-control"
                  />
                  {errors.username && (
                    <p className="text-danger">{errors.username}</p>
                  )}
                </div>
              </div>

              <div className="row mb-4">
                <label className="col-3 col-form-label">Password</label>
                <div className="col-8">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}
                </div>
              </div>

              {/* <div className="row mb-4">
                <label className="col-3 col-form-label">MobileNumber</label>
                <div className="col-8">
                  <input
                    type="number"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNmber(e.target.value)}
                    placeholder="Enter MobileNumber"
                    className="form-control"
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.mobileNumber}</p>
                  )}
                </div>
              </div> */}

              <div className="row mb-4">
                <label className="col-3 col-form-label">Role</label>
                <div className="col-8">
                <select
                  name="role"
                  onChange={(e) => setRole(e.target.value)}
                  className="form-control"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                  {/* <input
                    type="text"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Enter role"
                    className="form-control"
                  /> */}
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="btn btn-sm btn-outline-primary mt-3"
                >
                  Register
                </button>
              </div>
              <p>
                Already Registered ?{" "}
                <Link to={"/home"} className="home">
                  Login
                </Link>{" "}
                here{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

