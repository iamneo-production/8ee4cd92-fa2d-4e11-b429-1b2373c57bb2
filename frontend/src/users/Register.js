import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import { api } from '../APIConnect';
import { toast } from 'react-toastify';

const Register = () => {

  let navigate = useNavigate()
  const [validated, setValidated] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
  });

  const [pass, setPass] = useState({
    cpass: "",
  })

  const { name, email } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onInputChange2 = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value })

    if (user.password === e.target.value) {
      document.getElementById("cpass").classList.remove('is-invalid')
      document.getElementById("cpass").classList.add('is-valid')
    }
    else {
      document.getElementById("cpass").classList.remove('is-valid')
      document.getElementById("cpass").classList.add('is-invalid')
    }

    if(document.getElementById("cpass").classList.contains('is-valid') & document.getElementById("email").classList.contains('is-valid') & document.getElementById("password").classList.contains('is-valid') ){
      setValidated(true)
    }
    else{
      setValidated(false)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validated) {
      axios.post(`${api}user/register`, user).then((res)=>{
        toast.success("Registration Successful")
      navigate("/Login");
      })
      .catch((e)=>{
        toast.error("Registration Failed")
      })
    }
    
  }
  const validate = (e) => {
    var p = e.target.value
    
    if (e.target.name === 'password') {
      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
      if (p.match(passw)) {
        document.getElementById("passerror").hidden = true;
        document.getElementById("password").classList.remove('is-invalid')
        document.getElementById("password").classList.add('is-valid')

      }
      else {
        document.getElementById("passerror").hidden = false;
        document.getElementById("password").classList.remove('is-valid')
        document.getElementById("password").classList.add('is-invalid');
      }
    }
    else if (e.target.name === 'email') {
      var passw1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (p.match(passw1)) {
        document.getElementById("emailerror").hidden = true;
        document.getElementById("email").classList.remove('is-invalid');
        document.getElementById("email").classList.add('is-valid');

      }
      else {
        document.getElementById("emailerror").hidden = false;
        document.getElementById("email").classList.remove('is-valid');
        document.getElementById("email").classList.add('is-invalid');
      }
    }
    if (pass.cpass === e.target.value) {
      document.getElementById("cpass").classList.remove('is-invalid')
      document.getElementById("cpass").classList.add('is-valid')
    }
    else {
      document.getElementById("cpass").classList.remove('is-valid')
      document.getElementById("cpass").classList.add('is-invalid')
    }


    if(document.getElementById("cpass").classList.contains('is-valid') & document.getElementById("email").classList.contains('is-valid') & document.getElementById("password").classList.contains('is-valid') ){
      setValidated(true)
    }
    else{
      setValidated(false)
    }
  }

  return (
    <div >
      <Header />
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
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
                  onChange={(e) => onInputChange(e)}
                  required
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
                  id="email"
                  value={email}
                  onChange={(e) => { onInputChange(e); validate(e) }}
                  required
                />
                <div id='emailerror' className='emailerror' style={{ fontSize: '12px', color: 'red' }} hidden={true}>Password enter a valid email address ! </div>

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
                  required
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
                  required
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
                  required
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
                  required
                >
                  <option value="">--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                  id='password'
                  value={user.password}
                  onChange={(e) => { onInputChange(e); validate(e) }}
                  required
                />
                <div id='passerror' className='passerror' style={{ fontSize: '12px', color: 'red' }} hidden={true}>Password Should contain at least 8 Character<br/>
                Password should contain at least:<br/> -: One Uppercase and One Lowercase Alphabate<br/>-: One Special Character <br/> -: One Numeric Character
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your Password"
                  name="cpass"
                  id='cpass'
                  value={pass.cpass}
                  onChange={(e) => onInputChange2(e)}
                  required

                />
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
    </div >
  )
}

export default Register