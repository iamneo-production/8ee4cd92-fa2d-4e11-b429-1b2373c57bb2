import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';

const Register = () => {

    let navigate=useNavigate()

    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      height: "",
      weight: "",
      age: "",
      gender: "",
    });

    const{name,email}=user

    const onInputChange=(e)=>{
setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit=async (e)=>{
        alert("User is Succesfully Registered")
        e.preventDefault();
        await axios.post("http://localhost:8081/users",user)
        navigate("/Login") ;
    }
  return (
    <div>
      <Header/>
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
<form onSubmit={(e)=>onSubmit(e)}>
          
                <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
              type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
                </div>


                <div className="mb-3">
              <label htmlFor="Email ID" className="form-label">
                Email Address
              </label>
              <input
              type={"text"}
                className="form-control"
                placeholder="Enter your Email Address"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
                </div>

                <div className="mb-3">
  <label htmlFor="Password" className="form-label">
    Password
  </label>
  <input
    type={"password"}
    className="form-control"
    placeholder="Enter your Password"
    name="password"
    value={user.password}
    onChange={(e) => onInputChange(e)}
  />
</div>

<div className="mb-3">
  <label htmlFor="height" className="form-label">
    Height
  </label>
  <input
    type="number"
    className="form-control"
    placeholder="Enter your Height (in cm)"
    name="height"
    value={user.height}
    onChange={(e) => onInputChange(e)}
  />
</div>

<div className="mb-3">
  <label htmlFor="weight" className="form-label">
    Weight
  </label>
  <input
    type="number"
    className="form-control"
    placeholder="Enter your Weight (in kg)"
    name="weight"
    value={user.weight}
    onChange={(e) => onInputChange(e)}
  />
</div>

<div className="mb-3">
  <label htmlFor="age" className="form-label">
    Age
  </label>
  <input
    type="number"
    className="form-control"
    placeholder="Enter your Age"
    name="age"
    value={user.age}
    onChange={(e) => onInputChange(e)}
  />
</div>

<div className="mb-3">
  <label htmlFor="gender" className="form-label">
    Gender
  </label>
  <select
    className="form-select"
    name="gender"
    value={user.gender}
    onChange={(e) => onInputChange(e)}
  >
    <option value="">--Select Gender--</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>





                <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            </form>
                </div>
                </div>
        </div>
</div>
  )
}

export default Register