import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const WorkoutForm = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const id = user.id;
  const [workout, setWorkout] = useState({
    user_id: id,
    id: '',
    date: '',
    duration: '',
    notes: '',
  });

  const onInputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://8080-dbffddaabecbdcdefbebfbcddfeaeaadbdbabf.project.examly.io/users/${id}/workouts`,
        workout
      );
      console.log(response); // Handle the response as needed
      setWorkout({
        user_id: id,
        id: '',
        date: '',
        duration: '',
        notes: '',
      });
      alert('Workout Added Successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add your Workout!</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='id' className='form-label'>
                  User ID
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='id'
                  name='id'
                  value={id}
                  readOnly={true}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='date' className='form-label'>
                  Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='date'
                  name='date'
                  value={workout.date}
                  onChange={onInputChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='duration' className='form-label'>
                  Duration (in minutes)
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='duration'
                  name='duration'
                  value={workout.duration}
                  onChange={onInputChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='notes' className='form-label'>
                  Choose your workout
                </label>
                <select
                  className='form-control'
                  id='notes'
                  name='notes'
                  value={workout.notes}
                  onChange={onInputChange}
                >
                  <option value=''>Select a workout</option>
                  <option value='Cardiovascular Workouts'>
                    Cardiovascular Workouts
                  </option>
                  <option value='Strength Training'>Strength Training</option>
                  <option value='Group Fitness'>Group Fitness</option>
                  <option value='Outdoor Activities'>Outdoor Activities</option>
                  <option value='Flexibility and Mobility'>
                  Flexibility and Mobility
                  </option>
                </select>
              </div>
              <button type='submit' className='btn btn-primary'>
                Add Workout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
