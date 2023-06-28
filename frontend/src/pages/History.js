import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import axios from 'axios';
import './History.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { api } from '../APIConnect';

const History = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedWorkout, setUpdatedWorkout] = useState({
    id: '',
    date: '',
    duration: '',
    notes: ''
  });

  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const id = user.id;
        const response = await axios.get(`${api}users/${id}/workouts`);
        const data = response.data;
        setWorkoutData(data);
        setFilteredData(data); // Set the filtered data to the latest fetched data
        localStorage.setItem('workoutData', JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchWorkoutData();
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

  const handleUpdateWorkout = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
    setUpdatedWorkout({
      id: workout.id,
      date: workout.date,
      duration: workout.duration,
      notes: workout.notes
    });
  };

  const handleDeleteWorkout = (workoutId) => {
    axios
      .delete(`${api}workouts/${workoutId}`)
      .then((res) => {
        const updatedWorkoutData = workoutData.filter((item) => item.id !== workoutId);
        setWorkoutData(updatedWorkoutData);
        localStorage.setItem('workoutData', JSON.stringify(updatedWorkoutData));

        const updatedFilteredData = filteredData.filter((item) => item.id !== workoutId);
        setFilteredData(updatedFilteredData);

        console.log(`Workout with ID ${workoutId} deleted successfully. Status: ${res.status}`);
        alert('Workout deleted successfully');
      })
      .catch((err) => {
        console.log(err);
        alert('An error occurred while deleting the workout');
      });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `${api}workouts/${updatedWorkout.id}`,
        updatedWorkout
      );
      const updatedWorkoutData = workoutData.map((item) =>
        item.id === updatedWorkout.id ? response.data : item
      );
      setWorkoutData(updatedWorkoutData);
      localStorage.setItem('workoutData', JSON.stringify(updatedWorkoutData));
      alert('Workout Updated Successfully');
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const workoutNames = [
    'Cardiovascular Workouts',
    'Strength Training',
    'Flexibility and Mobility',
    'Group Fitness',
    'Outdoor Activities',
    'Mind-Body Exercises'
  ];

  const handleCloseModal = () => {
    setSelectedWorkout(null);
    setShowModal(false);
    setUpdatedWorkout({
      id: '',
      date: '',
      duration: '',
      notes: ''
    });
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

                    return (
                      <div key={id} className="col-md-6 mb-3">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                            <p className="card-text">Duration: {duration} minutes</p>
                            <p className="card-text">Notes: {notes}</p>
                            <br />

                            <button
                              className="btn btn-sm btn-danger mr-2"
                              onClick={() => handleDeleteWorkout(id)}
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
          <Modal.Title>Update Your Workout {selectedWorkout && selectedWorkout.notes}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="updateDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={updatedWorkout.date}
                onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, date: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="updateDuration">
              <Form.Label>Duration (in minutes)</Form.Label>
              <Form.Control
                type="number"
                value={updatedWorkout.duration}
                onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, duration: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="updateNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={updatedWorkout.notes}
                onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, notes: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default History;