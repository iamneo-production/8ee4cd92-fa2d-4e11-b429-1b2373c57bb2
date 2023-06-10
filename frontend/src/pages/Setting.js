import React, { useState , useEffect } from 'react';
import Navbar from '../layout/Navbar'
import '../pages/Setting.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Setting = () => {
  const [goalName, setGoal] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState(0);
  const [date, setDate] = useState('');

  const {id} = useParams();

  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  // if(id){
  //   document.getElementById("progress").hidden = false;
  // }

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    const user_id = user.id;
    const goalItem = {goalName,description,progress,user_id,date};
    console.log(goalItem);
    if(id){
      alert("Goal updated Successfully.");
      axios.put("http://localhost:8080/goal"+"/"+id,goalItem)
      .then(navigate("/view-goals"));
    }
    else{
      alert("New Goal Created.");
      axios.post("http://localhost:8080/goal",goalItem)
      .then(navigate("/view-goals"));
      setGoal('');
      setDate('');
    }
  };

  useEffect(()=>{
    axios.get("http://localhost:8080/goal"+"/"+id)
    .then((response) => {
      setGoal(response.data.goalName)
      setDescription(response.data.description)
      setDate(response.data.date)
      setProgress(response.data.progress)
    }).catch(error => {
            console.log(error)
        })
  },[id])



  return (
    <>
    <div>
      <header>
        <Navbar />
      </header>
    </div>
    <div className="fitness-goal-container">
      <h2>Add Fitness Goal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Goal:</label>
          <input
            type="text"
            id="goal"
            value={goalName}
            onChange={handleGoalChange}
            className="form-control"
            placeholder='Enter your goal..'
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text-area"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
            placeholder='Description for your goal..'
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            className="form-control"
          />
        </div>
        <div className="form-group" id='progress_div' >
          <label>Progress:</label>
          <input
            type="number"
            id="progress"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Goal</button>
      </form>
    </div>
    </>
  );
};

export default Setting;