
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const WorkoutForm = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const id= user.id;
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

      const response = await axios.post(`http://localhost:8081/users/${id}/workouts`, workout);
      console.log(response); // Handle the response as needed
      setWorkout({
        user_id: id,
        id: '',
        date: '',
        duration: '',
        notes: '',

      });
      alert("Workout Added Successfully");
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <div className='container'>
    <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add your Workout!</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="id" className="form-label">
          User ID
        </label>
        <input
          type="number"
          className="form-control"
          id="id"
          name="id"
          value={id}
          readOnly={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Workouts
        </label>
        <select
          className="form-control"
          id="id"
          name="id"
          value={workout.id}
          onChange={onInputChange}
        >
          <option value="">Select a workout</option>
          <option value="1">Push-ups</option>
          <option value="2">Sit-ups</option>
          <option value="3">Squats</option>
          <option value="4">Jumping jacks</option>
          <option value="5">Lunges</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={workout.date}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">
          Duration (in minutes)
        </label>
        <input
          type="number"
          className="form-control"
          id="duration"
          name="duration"
          value={workout.duration}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="notes" className="form-label">
          Notes
        </label>
        <textarea
          className="form-control"
          id="notes"
          name="notes"
          value={workout.notes}
          onChange={onInputChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
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

