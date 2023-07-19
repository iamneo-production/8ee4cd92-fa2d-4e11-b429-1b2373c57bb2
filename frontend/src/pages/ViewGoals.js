import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';

const ViewGoals = () => {
  const [goals, setGoals] = useState([]);
  const updatedGoals=[];

//   const user = JSON.parse(localStorage.getItem('user'));

  const user = {id:1};

  console.log(user);

  useEffect(()=>{
    axios.get("https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/goals")
      .then(res=>setGoals(res.data));
  },[])

  for(let i=0;i<goals.length;i++){
    if(goals[i]['user_id']===user.id ){
      updatedGoals.push(goals[i]);
    }
  }
  
  const handleRemoveGoal = async (goalId) => {
    try {
      const response = await axios.delete(`https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/goal/${goalId}`
      );
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


  return (
    <>
    {/* <div>
      <Navbar />
    </div> */}
    <div className="container">
      <h2>Fitness Goals List</h2>
      {updatedGoals.length === 0 ? (
        <p>No goals found.</p>
      ) : (
      <table className="table table-striped table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>S.No</th>
            <th scope="col">Goal Name</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Target Weight</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {updatedGoals.map((goal,index)=>(
            <tr>
              <th scope="row">{index+1}</th>
              <td>{goal.goalName}</td>
              <td>{goal.description}</td>
              <td>{goal.duration}</td>
              <td>{goal.targetWeight}</td>
              <td>
                {/* <Link to={`/update-goal/${goal.id}`} class="btn btn-info" role="button">update</Link> */}
                <button onClick={() => handleRemoveGoal(goal.id)} className="btn btn-danger">remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div></>
  );
};


export default ViewGoals;

