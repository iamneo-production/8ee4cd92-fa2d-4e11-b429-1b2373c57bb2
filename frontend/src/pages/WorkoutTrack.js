/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Navbar from '../layout/Navbar';
import axios from 'axios';
import './WorkoutTrack.css';
import { Chart, ArcElement } from 'chart.js/auto';
import Card from 'react-bootstrap/Card';
import pic1 from '../assets/img/dumbbell.png'
import pic2 from '../assets/img/muscle.png'
import pic3 from '../assets/img/flash.png'
import pic4 from '../assets/img/competition.png'
import {api} from "../APIConnect"


Chart.register(ArcElement);

const WorkoutTrack = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('Group Fitness');
  const [weeklyData, setWeeklyData] = useState([]);
  const [greeting, setGreeting] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const [currentStrike,setCurrnentStrike]=useState();
  const [maxStrike,setMaxStrike]=useState();
  const [goal,setGoal]=useState("No Goals");
  const [dayLeft, setDayLeft]=useState(0);

  let workoutsByCategory = {};
  let chartColors = [];


  const extractWeeklyGroupFitnessData = useCallback((workouts) => {
    const weeklyData = Array(7).fill(0);
    console.log(workouts)
    workouts.forEach((workout) => {
      if (selectedExercise === 'Group Fitness' || workout.notes === selectedExercise) {
        const workoutDate = new Date(workout.localDate);
        const dayOfWeek = workoutDate.getDay();
        weeklyData[dayOfWeek] += parseInt(workout.duration);
      }
    });

    return weeklyData;
  }, [selectedExercise]);

  useEffect(() => {
    fetchWorkouts();
    checkStrike();
    fetchGoalData();
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  useEffect(() => {
    const data = extractWeeklyGroupFitnessData(workouts);
    setWeeklyData(data);
  }, [workouts, selectedExercise, extractWeeklyGroupFitnessData]);

  const fetchGoalData=async()=>{
    try{
      console.log("fatching...")
      const response = await axios.get(`${api}goals/${user.id}`)
      console.log(response.data)
      response.data.map((item)=>{
        if(item.status==='pending'){
          console.log("in map",item)
          setGoal(item.goalName)
          setDayLeft(handleDaysLeft(item))
          return 1
        }
      })


    }
    catch(error){
      console.log(error)
    }
  }

  const handleDaysLeft =(goal)=>{
    const endDate = new Date(goal.date);
    endDate.setDate(endDate.getDate() + (parseInt(goal.duration)*28));
    const currentDate = new Date();
    const daysLeft = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
    console.log(daysLeft)
    return daysLeft;
  }

  const fetchWorkouts = async () => {
    try {
      const userId = user.id;
      const response = await axios.get(`${api}users/${userId}/workouts`);
      setWorkouts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const checkStrike=async()=>{
    try{
      const userId = user.id;
      const response = await axios.get(`${api}strike/${userId}`);
      console.log(response)
      if(response.data===""){
        setCurrnentStrike("0");
      setMaxStrike("0");
      }
      else{
      setCurrnentStrike(response.data.currentStrike);
      setMaxStrike(response.data.maxStrike);
      }
      
    }
    catch(error){
      console.error(error);
    }
  }

  const prepareWeeklyChartData = () => {
    const categoryColors = {
      'Flexibility and Mobility': '#BDC581', // light blue
      'Group Fitness': '#EAB543', // light yellow
      'Cardiovascular Workouts': '#D6A2E8', // light green
      'Strength Training': '#25CCF7', // light red
      'Outdoor Activities': '#FD7272', // light brown
      'Mind-Body Exercises': '#786fa6', // light grey
    };
    const data = {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: `${selectedExercise} - Weekly Duration (minutes)`,
          data: weeklyData,
          backgroundColor: `${categoryColors[selectedExercise]}`, // Light blue color
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
        workoutsByCategory[category].duration += parseInt(workout.duration);
        workoutsByCategory[category].workouts.push(workout);
      } else {
        workoutsByCategory[category] = {
          duration: parseInt(workout.duration),
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
      <div className='container'>
        <header>
          <Navbar />
        </header>
        <div className='maindiv'>
          <div className='greet'>
            {greeting}, {user.name} :)
          </div>
          <div className='welcome'>
            Welcome, to CalorieCloud
          </div>
          <div width='100%' className='cardData'>
            <Card style={{ width: '18rem', backgroundColor: "#74b9ff" }}
            >
              <Card.Body>
                <img width="20%" alt="logo" src={pic4}></img>
                <Card.Title>Pending Goals</Card.Title>
                <Card.Text>
                  {goal}
                </Card.Text>
                <Card.Title>Days Left</Card.Title>
                <Card.Text>
                  {dayLeft}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: "#a29bfe" }}
            >
              <Card.Body>
                <img width="20%" alt="logo" src={pic3}></img>
                <Card.Title>Current Strike</Card.Title>
                <Card.Text>
                  {currentStrike}
                </Card.Text>
                <Card.Title>Maximum Strike</Card.Title>
                <Card.Text>
                {maxStrike}
                </Card.Text>

              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor: "rgb(121, 209, 195)" }}
            >
              <Card.Body>
                <img width="20%" alt="logo" src={pic2}></img>
                <Card.Title>Average Workout</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
        </div>

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
              <h4 className='heading'>{selectedExercise} - Weekly Duration</h4>
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
      </div>
    </>
  );

};

export default WorkoutTrack;


// import React, { useState, useEffect, useCallback } from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import Navbar from '../layout/Navbar';
// import axios from 'axios';
// import './WorkoutTrack.css';
// import { Chart, ArcElement } from 'chart.js/auto';
// import { api } from '../APIConnect'

// Chart.register(ArcElement);

// const WorkoutTrack = () => {
//   const [workouts, setWorkouts] = useState([]);
//   const [selectedExercise, setSelectedExercise] = useState('Group Fitness');
//   const [weeklyData, setWeeklyData] = useState([]);

//   let workoutsByCategory = {};
//   let chartColors = [];

//   const extractWeeklyGroupFitnessData = useCallback((workouts) => {
//     const weeklyData = Array(7).fill(0);

//     workouts.forEach((workout) => {
//       if (selectedExercise === 'Group Fitness' || workout.notes === selectedExercise) {
//         const workoutDate = new Date(workout.date);
//         const dayOfWeek = workoutDate.getDay();
//         weeklyData[dayOfWeek] += workout.duration;
//       }
//     });

//     return weeklyData;
//   }, [selectedExercise]);

//   useEffect(() => {
//     fetchWorkouts();
//   }, []);

//   useEffect(() => {
//     const data = extractWeeklyGroupFitnessData(workouts);
//     setWeeklyData(data);
//   }, [workouts, selectedExercise, extractWeeklyGroupFitnessData]);

//   const fetchWorkouts = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       const userId = user.id;
//       const response = await axios.get(`${api}users/${userId}/workouts`);
//       setWorkouts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const prepareWeeklyChartData = () => {
//     const data = {
//       labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       datasets: [
//         {
//           label: `${selectedExercise} - Weekly Duration (minutes)`,
//           data: weeklyData,
//           backgroundColor: 'rgba(0, 123, 255, 0.7)', // Light blue color
//         },
//       ],
//     };

//     return data;
//   };

//   const prepareChartData = () => {
//     workoutsByCategory = {};
//     chartColors = [];

//     const categoryColors = {
//       'Flexibility and Mobility': 'rgba(0, 123, 255, 0.7)', // light blue
//       'Group Fitness': 'rgba(255, 223, 0, 0.7)', // light yellow
//       'Cardiovascular Workouts': 'rgba(0, 255, 123, 0.7)', // light green
//       'Strength Training': 'rgba(255, 0, 0, 0.7)', // light red
//       'Outdoor Activities': 'rgba(139, 69, 19, 0.7)', // light brown
//       'Mind-Body Exercises': 'rgba(128, 128, 128, 0.7)', // light grey
//     };

//     workouts.forEach((workout) => {
//       const category = workout.notes;
//       if (workoutsByCategory[category]) {
//         workoutsByCategory[category].duration += workout.duration;
//         workoutsByCategory[category].workouts.push(workout);
//       } else {
//         workoutsByCategory[category] = {
//           duration: workout.duration,
//           workouts: [workout],
//         };
//         chartColors.push(categoryColors[category]);
//       }
//     });

//     const data = {
//       labels: Object.keys(workoutsByCategory),
//       datasets: [
//         {
//           data: Object.values(workoutsByCategory).map((category) => category.duration),
//           backgroundColor: chartColors,
//         },
//       ],
//     };

//     return data;
//   };

//   const handleExerciseSelect = (event) => {
//     setSelectedExercise(event.target.value);
//   };


//   return (
//     <>
//       <Navbar />
//       <div className="graph-container">
//         <div className="pie-chart-container">
//           <div className="piechart-wrapper">
//             <Pie
//               data={prepareChartData()}
//               width={200}
//               height={200}
//               options={{
//                 plugins: {
//                   tooltip: {
//                     callbacks: {
//                       label: (context) => {
//                         const index = context.dataIndex;
//                         const category = Object.keys(workoutsByCategory)[index];
//                         const duration = context.dataset.data[index];
//                         return `${category}: ${duration} minutes`;
//                       },
//                     },
//                   },
//                   legend: {
//                     display: false,
//                   },
//                 },
//               }}
//             />
//           </div>
//           <div className="legend-container">
//             {Object.entries(workoutsByCategory).map(([category, categoryData], index) => (
//               <div key={index} className="legend-item">
//                 <div
//                   className="legend-color"
//                   style={{
//                     backgroundColor: chartColors[index],
//                   }}
//                 ></div>
//                 <span>
//                   {category} - {categoryData.duration} minutes
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//         <div className="dropdown-container">
//           <h3>Select Exercise:</h3>
//           <select value={selectedExercise} onChange={handleExerciseSelect}>
//             <option value="Group Fitness">Group Fitness</option>
//             <option value="Flexibility and Mobility">Flexibility and Mobility</option>
//             <option value="Cardiovascular Workouts">Cardiovascular Workouts</option>
//             <option value="Strength Training">Strength Training</option>
//             <option value="Outdoor Activities">Outdoor Activities</option>
//             <option value="Mind-Body Exercises">Mind-Body Exercises</option>
//           </select>
//         </div>
//         <div className="bar-chart-container">
//           <div className="barchart-wrapper">
//             <h3>{selectedExercise} - Weekly Duration</h3>
//             <div className="bar-chart">
//               <Bar
//                 data={prepareWeeklyChartData()}
//                 options={{
//                   maintainAspectRatio: false,
//                   scales: {
//                     y: {
//                       beginAtZero: true,
//                       title: {
//                         display: true,
//                         text: 'Duration (minutes)',
//                         font: {
//                           weight: 'bold',
//                         },
//                       },
//                     },
//                     x: {
//                       title: {
//                         display: true,
//                         text: 'Day of the Week',
//                         font: {
//                           weight: 'bold',
//                         },
//                       },
//                     },
//                   },
//                   plugins: {
//                     legend: {
//                       display: false,
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         <br></br>
//         <br></br>
//       </div>
//       <br></br>
//         <br></br>
//     </>
//   );
  
// };

// export default WorkoutTrack;
