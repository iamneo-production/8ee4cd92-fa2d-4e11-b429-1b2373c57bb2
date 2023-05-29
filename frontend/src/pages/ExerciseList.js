import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('https://8080-cabacffafefbebfbcddfeaeaadbdbabf.project.examly.io/exercises');
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <>
    <header>
    <Navbar />
  </header>
  <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h2 className='text-center m-4'>Workout List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Exercise ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.id}</td>
              <td>{exercise.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </>
  );
};

export default ExerciseList;
