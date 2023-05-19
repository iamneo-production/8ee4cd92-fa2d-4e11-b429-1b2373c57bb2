import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';


const UpdateProfile = () => {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id= user.id;
    axios.get(`http://localhost:8081/users/${id}`)
      .then(res => {
        const { name, email, height, weight, age, gender } = res.data;
        setUser({ ...user, name, email, height, weight, age, gender });
      })
      .catch(err => console.log(err));
  }, []);

  const { name, email, height, weight, age, gender } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id= user.id;
    e.preventDefault();
    await axios.put(`http://localhost:8081/users/${id}`, { name, email, height, weight, age, gender})
    alert("Profile Updated Successfully");  
    navigate("/user-dashboard");
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Update Profile</h2>
            <form onSubmit={(e) => onSubmit(e)}>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  name="name"
                  value={name}
                  readOnly={true}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Email ID" className="form-label">
                  Email Address
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  name="email"
                  value={email}
                  readOnly={true}
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
                  value={height}
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
                  value={weight}
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
                  value={age}
                    onChange={(e) => onInputChange(e)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="Gender" className="form-label">
                  Gender
                </label>
                <input
                  className="form-select"
                  name="gender"
                  value={gender}
                  readOnly={true}
                />
              </div>
                <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/user-dashboard">
              Cancel
            </Link>
            </form>
            </div>
            </div>
            </div>
            </div>
            );
            };
export default UpdateProfile;