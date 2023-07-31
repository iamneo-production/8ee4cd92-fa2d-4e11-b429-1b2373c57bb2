import React, { useState, useEffect } from 'react';
import '../pages/WeightTracker.css'
import axios from 'axios';
import Navbar from '../layout/Navbar';
import { api } from '../APIConnect';
import { toast } from 'react-toastify';

const WeightTracker = () => {
  const [weights, setWeights] = useState([]);
  const [currentWeight, setCurrentWeight] = useState('');
  const updatedWeights=[]

  
  const user = JSON.parse(localStorage.getItem('user'));
  
    useEffect(()=>{ 
      axios.get(`${api}weights`)
      .then(res=>setWeights(res.data));
        for(let i=0;i<weights.length;i++){
          if(weights[i]['user_id']===user.id){
            updatedWeights.push(weights[i]);
          }
        }
  },[weights]);


  const handleWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  const handleAddWeight = (e) => {
    if (currentWeight.trim() === '') return;
    const weight = currentWeight;
    const date = new Date().toISOString().split('T')[0];
    
    setCurrentWeight('');

    const user_id = user.id;
    const weightItem = {user_id,date,weight};
    console.log(weightItem);
    axios.post(`${api}addWeight`,weightItem);
    toast.success("Weight Added..")

  };

  return (
    <div>
      <header style={{ marginTop: "10px" }}>
        <Navbar />
      </header>
    <div className="container">
      <h1 className="mt-4 mb-4">Weight Tracker</h1>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter weight in kg"
          value={currentWeight}
          onChange={handleWeightChange}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddWeight}>
          Add Weight
        </button>
      </div>
      <div className="weight-graph">
        {weights.map((weight, index) => (
          <div key={index} className="weight-item">
            <div className="weight-circle">{weight.weight} kg</div>
            <div className="weight-line"></div>
            <div className="weight-date">{weight.date}</div>
        </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WeightTracker;


