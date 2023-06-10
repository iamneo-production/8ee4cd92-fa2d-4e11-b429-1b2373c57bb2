import React, { useState, useEffect, useCallback } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Navbar from '../layout/Navbar';
import axios from 'axios';
import './WorkoutTrack.css';
import { Chart, ArcElement } from 'chart.js/auto';

Chart.register(ArcElement);

const WorkoutTrack = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('Group Fitness');
  const [weeklyData, setWeeklyData] = useState([]);

  let workoutsByCategory = {};
  let chartColors = [];

  const extractWeeklyGroupFitnessData = useCallback((workouts) => {
    const weeklyData = Array(7).fill(0);

    workouts.forEach((workout) => {
      if (selectedExercise === 'Group Fitness' || workout.notes === selectedExercise) {
        const workoutDate = new Date(workout.date);
        const dayOfWeek = workoutDate.getDay();
        weeklyData[dayOfWeek] += workout.duration;
      }
    });

    return weeklyData;
  }, [selectedExercise]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  useEffect(() => {
    const data = extractWeeklyGroupFitnessData(workouts);
    setWeeklyData(data);
  }, [workouts, selectedExercise, extractWeeklyGroupFitnessData]);

  const fetchWorkouts = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user.id;
      const response = await axios.get(`https://8080-deadefebdddbeefbebfbcddfeaeaadbdbabf.project.examly.io/users/${userId}/workouts`);
      setWorkouts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const prepareWeeklyChartData = () => {
    const data = {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: `${selectedExercise} - Weekly Duration (minutes)`,
          data: weeklyData,
          backgroundColor: 'rgba(0, 123, 255, 0.7)', // Light blue color
        },
      ],
    };

    return data;
  };

  const prepareChartData = () => {
    workoutsByCategory = {};
    chartColors = [];

    const categoryColors = {
      'Flexibility and Mobility': 'rgba(0, 123, 255, 0.7)', // light blue
      'Group Fitness': 'rgba(255, 223, 0, 0.7)', // light yellow
      'Cardiovascular Workouts': 'rgba(0, 255, 123, 0.7)', // light green
      'Strength Training': 'rgba(255, 0, 0, 0.7)', // light red
      'Outdoor Activities': 'rgba(139, 69, 19, 0.7)', // light brown
      'Mind-Body Exercises': 'rgba(128, 128, 128, 0.7)', // light grey
    };

    workouts.forEach((workout) => {
      const category = workout.notes;
      if (workoutsByCategory[category]) {
        workoutsByCategory[category].duration += workout.duration;
        workoutsByCategory[category].workouts.push(workout);
      } else {
        workoutsByCategory[category] = {
          duration: workout.duration,
          workouts: [workout],
        };
        chartColors.push(categoryColors[category]);
      }
    });

    const data = {
      labels: Object.keys(workoutsByCategory),
      datasets: [
        {
          data: Object.values(workoutsByCategory).map((category) => category.duration),
          backgroundColor: chartColors,
        },
      ],
    };

    return data;
  };

  const handleExerciseSelect = (event) => {
    setSelectedExercise(event.target.value);
  };


  return (
    <>
      <Navbar />
      <div className="graph-container">
        <div className="pie-chart-container">
          <div className="piechart-wrapper">
            <Pie
              data={prepareChartData()}
              width={200}
              height={200}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        const index = context.dataIndex;
                        const category = Object.keys(workoutsByCategory)[index];
                        const duration = context.dataset.data[index];
                        return `${category}: ${duration} minutes`;
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <div className="legend-container">
            {Object.entries(workoutsByCategory).map(([category, categoryData], index) => (
              <div key={index} className="legend-item">
                <div
                  className="legend-color"
                  style={{
                    backgroundColor: chartColors[index],
                  }}
                ></div>
                <span>
                  {category} - {categoryData.duration} minutes
                </span>
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="dropdown-container">
          <h3>Select Exercise:</h3>
          <select value={selectedExercise} onChange={handleExerciseSelect}>
            <option value="Group Fitness">Group Fitness</option>
            <option value="Flexibility and Mobility">Flexibility and Mobility</option>
            <option value="Cardiovascular Workouts">Cardiovascular Workouts</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Outdoor Activities">Outdoor Activities</option>
            <option value="Mind-Body Exercises">Mind-Body Exercises</option>
          </select>
        </div>
        <div className="bar-chart-container">
          <div className="barchart-wrapper">
            <h3>{selectedExercise} - Weekly Duration</h3>
            <div className="bar-chart">
              <Bar
                data={prepareWeeklyChartData()}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Duration (minutes)',
                        font: {
                          weight: 'bold',
                        },
                      },
                    },
                    x: {
                      title: {
                        display: true,
                        text: 'Day of the Week',
                        font: {
                          weight: 'bold',
                        },
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <br></br>
        <br></br>
    </>
  );
  
};

export default WorkoutTrack;
