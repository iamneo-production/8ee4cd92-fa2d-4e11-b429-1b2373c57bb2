import React, { useState, useEffect } from 'react';
import '../pages/WeightTracker.css'
import axios from 'axios';
//import { api } from '../APIConnect';

const WeightTracker = () => {
  const [weights, setWeights] = useState([]);
  const [currentWeight, setCurrentWeight] = useState('');
  const updatedWeights=[]

  const user = {id:1};
  
  
    useEffect(()=>{ 
      axios.get("https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/weights")
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
    axios.post("https://8080-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/addWeight",weightItem);

  };

  return (
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
  );
};

export default WeightTracker;


