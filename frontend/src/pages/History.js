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

  const [updateWorkout, setUpdateWorkout] = useState(null);
  const [updatedWorkout, setUpdatedWorkout] = useState({
    id: "",
    date: "",
    duration: "",
    notes: ""
  });

  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    axios
      .get(`https://8080-dbffddaabecbdcdefbebfbcddfeaeaadbdbabf.project.examly.io/users/${id}/workouts`)
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

  const fetchWorkoutData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    axios
      .get(`https://8080-dbffddaabecbdcdefbebfbcddfeaeaadbdbabf.project.examly.io/users/${id}/workouts`)
      .then((res) => {
        setWorkoutData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchWorkoutData();
  }, []);

  const handleUpdateWorkout = (workout) => {
    setUpdateWorkout(workout); // Set the workout to be updated
    setShowModal(true); // Show the modal for updating the workout
  };
  

  const handleDeleteWorkout = (id) => {
    axios
      .delete(`https://8080-dbffddaabecbdcdefbebfbcddfeaeaadbdbabf.project.examly.io/workouts/${id}`)
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
      await axios.post(`https://8080-dbffddaabecbdcdefbebfbcddfeaeaadbdbabf.project.examly.io/workouts/${selectedWorkout.id}/exercises`, exercise);
      setSelectedWorkout(null);
      setShowModal(false);
      setExerciseName('');
      setExerciseDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.put(
        `http://localhost:8081/workouts/${updateWorkout.id}`,
        updatedWorkout
      );
      const updatedWorkoutData = workoutData.map((item) =>
        item.id === updateWorkout.id ? response.data : item
      );
      setWorkoutData(updatedWorkoutData);
      alert('Workout Updated Successfully');
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
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
                            <br/>

                            {/* <div className="exercises">
                              <h6 className="card-subtitle mb-2">Exercises:</h6>
                              {exercises.map((exercise, index) => (
                                <p key={index} className="card-text">
                                  {exercise.name} - Sets: {exercise.sets}
                                </p>
                              ))}
                            </div> */}

                            <button
                              className="btn btn-sm btn-danger mr-2"
                              onClick={() => handleDeleteWorkout(item.id)}
                              style={{ marginRight: '10px' }}
                            >
                              Delete Workout
                            </button>
                            
                            <button
                              className="btn btn-sm btn-danger mr-2"
                              onClick={() => handleUpdateWorkout(item)}
                              style={{ backgroundColor: '#0096FF', marginLeft: '10px' }}

                            >
                               Update Workout  
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
          <Modal.Title>Update Your Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form onSubmit={handleUpdate}>
    <Form.Group controlId='updateDate'>
      <Form.Label>Date</Form.Label>
      <Form.Control
        type='date'
        value={updatedWorkout.date}
        onChange={(e) => setUpdatedWorkout({...updatedWorkout, date: e.target.value})}
        required
      />
    </Form.Group>
    <Form.Group controlId='updateDuration'>
      <Form.Label>Duration</Form.Label>
      <Form.Control
        type='number'
        value={updatedWorkout.duration}
        onChange={(e) => setUpdatedWorkout({...updatedWorkout, duration: e.target.value})}
        required
      />
    </Form.Group>
    <Form.Group controlId='updateNotes'>
      <Form.Label>Notes</Form.Label>
      <Form.Control
        as='textarea'
        rows={3}
        value={updatedWorkout.notes}
        onChange={(e) => setUpdatedWorkout({...updatedWorkout, notes: e.target.value})}
        required
      />
    </Form.Group>
    <Button variant='primary' type='submit'>
      Update Workout
    </Button>
  </Form>
</Modal.Body>
      </Modal>
    </div>
  );
};

export default History;
