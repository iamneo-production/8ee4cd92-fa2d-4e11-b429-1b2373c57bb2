import React from "react";
import Navbar from "../layout/Navbar";

import "./NutritionRecommandation.css";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from '../APIConnect';
import {Table } from "react-bootstrap";

const NutritionWeightGainProgress = () => {
  const [showTable, setShowTable] = React.useState(false);
  const [dietProgress, setDietProgress] = React.useState([]);
  const [date, setDate] = React.useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  

  const handleDateChange = (e) => {
    setDate(e.target.value);
    
  };

  const handleTrack = async() => {
    setShowTable(true);
  
    await axios.get(`${api}nutritionWeightgain/${user.id}/${date}/read`)
      .then((res) => {
        setDietProgress(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleTrackWeek = (event) => {
    setShowTable(true);
    event.preventDefault();
    var curr = new Date(date);
    let week = []
    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        let res = "";
        let date = day.slice(8, 10);
        let month = day.slice(5, 7) + "-";
        let year = day.slice(0, 4) + "-";
        res = year + month + date;
        week.push(res)
    }
    
    
    axios
      .get(`${api}nutritionWeightgainWeek/${user.id}/
      ${week[0]}/${week[1]}/${week[2]}/${week[3]}/${week[4]}/${week[5]}/${week[6]}/read`)
      .then((res) => {
        
        setDietProgress(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <header style={{ marginTop: "10px" }}>
        <Navbar />
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="dateCenter">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Filter by date</h5>
                  <div className="form-group">
                    <label htmlFor="date">Select a date:</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      onChange={handleDateChange}
                    />
                    <button onClick={handleTrack} className="btn btn-primary">
                      Track
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="dateCenter">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Weekly Progress</h5>
                  <div className="form-group">
                    <label htmlFor="date">Select a date:</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      onChange={handleDateChange}
                    />
                    <button onClick={handleTrackWeek} className="btn btn-primary">
                      Track
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showTable ? (
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">NUTRITION DETAILS</h5>
                  <Table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Date</th>
                        <th>Breakfast</th>
                        <th>Mid Morning Snack</th>
                        <th>Lunch</th>
                        <th>Evening Snack</th>
                        <th>Dinner</th>
                        <th>Total calories in kcal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dietProgress.map((val) => (
                        <tr key={val.id}>
                          <td>{val.date}</td>
                          <td>
                            {val.breakfast}
                            <br></br>
                            {val.breakfast_calories} calories
                          </td>
                          <td>
                            {val.mid_morning_snack}
                            <br></br>
                            {val.mid_morning_calories} calories
                          </td>
                          <td>
                            {val.lunch}
                            <br></br>
                            {val.lunch_calories} calories
                          </td>
                          <td>
                            {val.evening_snack}
                            <br></br>
                            {val.evening_calories} calories
                          </td>
                          <td>
                            {val.dinner}
                            <br></br>
                            {val.dinner_calories} calories
                          </td>
                          <td>{val.total_calories}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NutritionWeightGainProgress;
