import React, { useState , useEffect } from 'react';
import Navbar from '../layout/Navbar'
import '../style/Setting.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Setting = () => {
  const [goalName, setGoal] = useState('');
  const [description, setDescription] = useState('');
  const [targetWeight, setTargetWeight] = useState(0);
  const [duration, setDuration] = useState('');

  const {id} = useParams();

  const navigate = useNavigate();
  
  // const user = JSON.parse(localStorage.getItem('user'));

  const user = {id:1};

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleTargetWeightChange = (e) => {
    setTargetWeight(e.target.value);
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    const user_id = user.id;
    const date = new Date().toISOString().split('T')[0];
    const goalItem = {date,description,duration,goalName,user_id,targetWeight};
    console.log(goalItem);
    if(id){
      alert("Goal updated Successfully.");
      axios.put("https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/goal"+"/"+id,goalItem)
      .then(navigate("/view-goals"));
    }
    else{
      alert("Your have created the goal successfully.");
      console.log(goalItem);
      axios.post("https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/goal",goalItem)
      .then(navigate("/view-goals"));
      setGoal('');
      setDescription('');
      setDuration('');
      setTargetWeight(0);
    }
  };

  useEffect(()=>{
    axios.get("https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/goal"+"/"+id)
    .then((response) => {
      setGoal(response.data.goalName)
      setDescription(response.data.description)
      setDuration(response.data.duration)
      setTargetWeight(response.data.targetWeight)
    }).catch(error => {
            console.log(error)
        })
  },[id])



  return (
    <>
    {/* <div>
      <header>
        <Navbar />
      </header>
    </div> */}
    <div className="fitness-goal-container">
      <h2>Add Fitness Goal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Goal:</label>
          <select value={goalName} onChange={handleGoalChange} className="drop-down">
          <option value="">Select a goal</option>
          <option value="weight gain">Weight Gain</option>
          <option value="weight loss">Weight Loss</option>
        </select>
        </div>
        <div className="form-mem">
          <label className="description">Description:</label>
          <div className="form-con">
          <input
            type="text-area"
            value={description}
            onChange={handleDescriptionChange}
            className='form-tex'
            placeholder='Enter description for your goal..'
          /></div>
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <select value={duration} onChange={handleDurationChange} className="drop-down">
            <option>select the duration</option>
            <option value="1 month">1 month</option>
            <option value="2 months">2 months</option>
            <option value="3 months">3 months</option>
            <option value="4 months">4 months</option>
            <option value="5 months">5 months</option>
            <option value="6 months">6 months</option>
            <option value="7 months">7 months</option>
            <option value="8 months">8 months</option>
            <option value="9 months">9 months</option>
            <option value="10 months">10 months</option>
            <option value="11 months">11 months</option>
            <option value="12 months">12 months</option>
          </select>
        </div>
        <div className="form-mem" >
          <label className='targetWeight'>Target Weight:</label>
          <div className="form-con">
          <input
            type="number"
            min="0"
            value={targetWeight}
            onChange={handleTargetWeightChange}
            className='form-tex'
          /></div>
        </div>
        <button type="submit" className="btn btn-primary">Add Goal</button>
      </form>
    </div>
    </>
  );
};

export default Setting;

