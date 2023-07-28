import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import '../pages/ViewGoals.css'
import { api } from '../APIConnect';
import { toast } from 'react-toastify';


const ViewGoals = () => {
  const [goals, setGoals] = useState([]);
  let currentGoal={};

  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user);

  useEffect(()=>{
    axios.get(`${api}goals/${user.id}`)
      .then(res=>setGoals(res.data));
  },[])


  if(goals.length>0){
    currentGoal = goals[goals.length-1];
  }
  

  const handleRemoveGoal = async (goalId) => {
    try {
      const response = await axios.delete(`${api}goal/${goalId}`
      );
      toast.warning("Goal Removed !")
      if (response.status===200) {
        const updatedGoals = goals.filter((goal) => goal.id !== goalId);
        setGoals(updatedGoals);
      } else {
        console.error('Failed to remove goal:', response.status);
      }
    } catch (error) {
      console.error('Error removing goal:', error);
    }
  };

  const handleDaysLeft =(goal)=>{
    const endDate = new Date(goal.date);
    endDate.setDate(endDate.getDate() + (parseInt(goal.duration)*28));
    const currentDate = new Date();
    const daysLeft = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  const handleChangeStatus = async (id) => {
    try {
      await axios.put(`${api}goalStatus/${id}`, { status: "completed" }); 
      setGoals((prevEntities) =>
        prevEntities.map((entity) =>
          entity.id === id ? { ...entity, status: "completed" } : entity
        )
      );
    } catch (error) {
      console.error('Error changing status', error);
    }
  };

  

  return (
    <>
    <div style={{marginBottom:40}}>
      <Navbar />
    </div>
    {goals.length === 0 || currentGoal.status === 'completed' ? (
      <>
      <h5>Please set a goal.</h5>
      <Link to={"/goal-setting"} className="btn btn-success">Set your goal</Link>
      </>
    ):(
      <div className="card text-white bg-secondary mb-3 " style={{width:700,marginLeft:430}} >
        <div className='card-body'>
          <h3 className="card-title">Current Goal</h3>
          <div className='body' >
          <p  >Goal Name     : {currentGoal.goalName}</p>
          <p  >Description   : {currentGoal.description}</p>
          <p  >Duration      : {currentGoal.duration}</p>
          <p  >Target Weight : {currentGoal.targetWeight}</p>
          <p  >Days Left     : {handleDaysLeft(currentGoal)}</p>
          </div>
          <Link to={`/update-goal/${currentGoal.id}`} className="btn btn-primary" role="button" style={{marginRight:20}}>update</Link>
          <button onClick={() => handleRemoveGoal(currentGoal.id)} className="btn btn-danger">remove</button>
        </div>
      </div>

    )}
    
    <div className='track-button'>
      <Link to={"/weight-tracker"} className="btn btn-info">Track your weight progress here...</Link>
    </div>

    <div className="container">
      {goals.length === 0 ? (
        <p> </p>
      ) : (
        <>
        <h3>All Goals</h3>
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>S.No</th>
            <th scope="col">Goal Name</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Target Weight</th>
            <th scope="col">Days Left</th>
            <th scope='col'>Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal,index)=>(
            <tr>
              <th scope="row">{index+1}</th>
              <td>{goal.goalName}</td>
              <td>{goal.date}</td>
              <td>{goal.description}</td>
              <td>{goal.duration}</td>
              <td>{goal.targetWeight}</td>
              <td>{handleDaysLeft(goal)}</td>
              <td>{goal.status}</td>
              <td>
              {goal.status === 'completed' ? (
                <span style={{ color: 'green' }}>&#10004;</span> 
              ) : (
                <button onClick={() => handleChangeStatus(goal.id)} className="btn btn-success" disabled={goal.status === 'completed'}>completed</button>
              )}
            </td>
            </tr>
          ))}
        </tbody>
      </table></>
      )}
    </div>
    {/* <div>
      <Link to={"/weight-tracker"} className="btn btn-info">Track your weight progress here...</Link>
    </div> */}
    </>
  );
};


export default ViewGoals;
