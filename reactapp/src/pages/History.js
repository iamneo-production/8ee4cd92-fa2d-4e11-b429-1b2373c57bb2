import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import axios from 'axios';
import './History.css';
import { Modal, Button, Form } from 'react-bootstrap';

const History = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [exerciseName, setExerciseName] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    axios
      .get(`http://localhost:8081/users/${id}/workouts`)
      .then((res) => {
        setWorkoutData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filtered = workoutData.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === selectedDate.getFullYear() &&
        itemDate.getMonth() === selectedDate.getMonth() &&
        itemDate.getDate() === selectedDate.getDate()
      );
    });
    setFilteredData(filtered);
  }, [selectedDate, workoutData]);

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  

  const handleDeleteWorkout = (id) => {
    axios
      .delete(`http://localhost:8081/workouts/${id}`)
      .then((res) => {
        const updatedWorkoutData = workoutData.filter((item) => item.id !== id);
        setWorkoutData(updatedWorkoutData);
      })
      .catch((err) => console.log(err));
  };



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const exercise = {
      workoutId: selectedWorkout.id,
      name: exerciseName,
      description: exerciseDescription
    };

    try {
      await axios.post(`http://localhost:8081/workouts/${selectedWorkout.id}/exercises`, exercise);
      setSelectedWorkout(null);
      setShowModal(false);
      setExerciseName('');
      setExerciseDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleExerciseNameChange = (event) => {
    setExerciseName(event.target.value);
  };

  const handleExerciseDescriptionChange = (event) => {
    setExerciseDescription(event.target.value);
  };

  const handleCloseModal = () => {
    setSelectedWorkout(null);
    setShowModal(false);
    setExerciseName('');
    setExerciseDescription('');
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
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
                    value={selectedDate.toISOString().slice(0, 10)}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Workout history</h5>
                <div className="row">
                  {filteredData.map((item) => {
                    const { id, date, duration, notes } = item;
                    const exercises = item.exercises || [];

                    return (
                      <div key={id} className="col-md-6 mb-3">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                            <p className="card-text">Duration: {duration} minutes</p>
                            <p className="card-text">Notes: {notes}</p>

                            <div className="exercises">
                              <h6 className="card-subtitle mb-2">Exercises:</h6>
                              {exercises.map((exercise, index) => (
                                <p key={index} className="card-text">
                                  {exercise.name} - Sets: {exercise.sets}
                                </p>
                              ))}
                            </div>

                            <button
                              className="btn btn-sm btn-danger mr-2"
                              onClick={() => handleDeleteWorkout(item.id)}
                            >
                              Delete Workout
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Exercise to {selectedWorkout && selectedWorkout.notes}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId='exerciseName'>
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control as='select' value={exerciseName} onChange={handleExerciseNameChange} required>
                <option value=''>Select Exercise</option>
                {selectedWorkout && (
                  <>
                    {selectedWorkout.notes === 'Outdoor Activities' && (
                      <>
                        <option value='Hiking'>Hiking</option>
                        <option value='Swimming'>Swimming</option>
                        <option value='Rock Climbing'>Rock Climbing</option>
                        <option value='Kayaking/Canoeing'>Kayaking/Canoeing</option>
                        <option value='Stand-up Paddleboarding (SUP)'>Stand-up Paddleboarding (SUP)</option>
                        <option value='Tennis'>Tennis</option>
                        <option value='Soccer'>Soccer</option>
                      </>
                    )}
                    {selectedWorkout.notes === 'Cardiovascular Workouts' && (
                      <>
                        <option value='Running/Jogging on a Treadmill or Outdoors'>Running/Jogging on a Treadmill or Outdoors</option>
                        <option value='Cycling (Indoor or Outdoor)'>Cycling (Indoor or Outdoor)</option>
                        <option value='Jumping Rope'>Jumping Rope</option>
                        <option value='High-Intensity Interval Training (HIIT)'>High-Intensity Interval Training (HIIT)</option>
                        <option value='Stair Climbing'>Stair Climbing</option>
                        <option value='Rowing'>Rowing</option>
                      </>
                    )}
                    {/* Add other workout categories here */}
                  </>
                )}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exerciseDescription'>
              <Form.Label>Exercise Description</Form.Label>
              <Form.Control as='textarea' rows={3} value={exerciseDescription} onChange={handleExerciseDescriptionChange} required />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add Exercise
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default History;
