import React, { useState } from 'react';
import { Button, Card, Modal, Table } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import avatar02 from "../assets/img/wb3.png";
import avatar01 from "../assets/img/wb2.png";
import avatar03 from "../assets/img/wb1.png";

const WorkoutBase = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false); // State for workout form modal
  const [allWorkouts, setAllWorkouts] = useState([]);
  const dic = {
    "Cardiovascular Workouts": "1",
    "Strength Training": "2",
    "Flexibility and Mobility": "3",
    "Group Fitness": "4",
    "Outdoor Activities": "5",
    "Mind-Body Exercises": "6"
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const uid = user.id;
  const [workout, setWorkout] = useState({
    user_id: uid,
    id: '',
    date: '',
    duration: '',
    notes: ''
  });

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal);
  };


  const handleFormModal = () => {
    setShowFormModal(!showFormModal);
  };

  const onInputChange = (e) => {
    if (e.target.name === "notes") {
      setWorkout({ ...workout, ['id']: String(uid) + dic[e.target.value], [e.target.name]: e.target.value });
    } else {
      setWorkout({ ...workout, [e.target.name]: e.target.value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(workout)
      const response = await axios.post(
        `http://localhost:8081/users/${uid}/workouts`,
        workout
      );
      console.log(response); // Handle the response as needed
      setWorkout({
        user_id: uid,
        id: '',
        date: '',
        duration: '',
        notes: ''
      });
      alert('Workout Added Successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/users/${uid}/workouts`);
      const sortedWorkouts = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setAllWorkouts(sortedWorkouts);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchandupdateWorkouts = async () => {
    try {
        const response = await axios.get(`http://localhost:8081/users/${uid}/workouts`);
        const sortedWorkouts = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setAllWorkouts(sortedWorkouts);
    } catch (error) {
        console.error(error);
    }
};
const deleteWorkout = async (workoutId) => {
    try {
      await axios.delete(`http://localhost:8081/users/${uid}/workouts/${workoutId}`);
      setAllWorkouts(allWorkouts.filter((workout) => workout.id !== workoutId));
      alert('Workout Deleted Successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const WorkoutForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">User ID</label>
          <input
            type="id"
            className="form-control"
            id="uid"
            name="id"
            value={uid}
            readOnly={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={workout.date}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="duration"
            name="duration"
            value={workout.duration}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Type of Workout</label>
          <select
            className="form-control"
            id="notes"
            name="notes"
            value={workout.notes}
            onChange={onInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Cardiovascular Workouts">Cardiovascular Workouts</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Flexibility and Mobility">Flexibility and Mobility</option>
            <option value="Group Fitness">Group Fitness</option>
            <option value="Outdoor Activities">Outdoor Activities</option>
            <option value="Mind-Body Exercises">Mind-Body Exercises</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Workout
        </button>
      </form>
    );
  };

  return (
    <div>
      <header style={{ marginTop: '10px' }}>
        <Navbar />
      </header>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card style={{ width: '18rem', border: '2px solid rgb(207, 117, 249)' }}>
              <Card.Img variant="top" src={avatar03} />
              <Card.Body>
                <Card.Title>Craft Your Fitness Journey</Card.Title>
                <Card.Text>
                  "Create your personalized fitness journey with ease. Add a workout and take a step towards a healthier you!"
                </Card.Text>
                <Button variant="primary" onClick={handleFormModal}>
                  Add a Workout
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: '18rem', border: '2px solid rgb(207, 117, 249)' }}>
              <Card.Img variant="top" src={avatar01} />
              <Card.Body>
                <Card.Title>Unveil Your Workout Gallery</Card.Title>
                <Card.Text>
                  "Stay on top of your fitness game with our comprehensive workout tracking. Show a workout and get ready to crush your goals!"
                </Card.Text>
                <Button variant="primary" onClick={() => {
                  fetchWorkouts();
                  handleModal();
                }}>
                  Show All Workouts
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card name="card1" id="card1" className="card1" style={{ width: '18rem', border: '2px solid rgb(207, 117, 249)' }}>
              <Card.Img variant="top" src={avatar02} />
              <Card.Body>
                <Card.Title>Refine, Renew, and Reimagine</Card.Title>
                <Card.Text>
                  "Flexibility is key to achieving your fitness targets. Update and delete workouts effortlessly to stay on track!"
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                    fetchandupdateWorkouts();
                    handleUpdateModal();
                }}>Update and Delete</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Modal size="xl"
        aria-labelledby="example-modal-sizes-title-lg" show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title  id="example-modal-sizes-title-lg">All Workouts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allWorkouts.length === 0 ? (
            <p>No workouts found.</p>
          ) : (
            <Table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Workout Id</th>
                  <th>Date</th>
                  <th>Duration (minutes)</th>
                  <th>Type of Workout</th>
                </tr>
              </thead>
              <tbody>
                {allWorkouts.map((workout) => (
                  <tr key={workout.id}>
                    <td>{workout.id}</td>
                    <td>{workout.date}</td>
                    <td>{workout.duration}</td>
                    <td>{workout.notes}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>

      <Modal size="xl"
        aria-labelledby="example-modal-sizes-title-lg" show={showUpdateModal} onHide={handleUpdateModal}>
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            All Workouts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allWorkouts.length === 0 ? (
            <p>No workouts found.</p>
          ) : (
            <Table className="table table-hover">
              <thead className="table-light">
                <tr>
                <th>workout Id</th>
                  <th>Date</th>
                  <th>Duration (minutes)</th>
                  <th>Type of Workout</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allWorkouts.map((workout) => (
                  <tr key={workout.id}>
                    <td>{workout.id}</td>
                    <td>{workout.date}</td>
                    <td>{workout.duration}</td>
                    <td>{workout.notes}</td>
                    <td><button class="btn btn-info">Update</button>{' '}{' '}
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteWorkout(workout.id)}
                      > Delete </button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showFormModal} onHide={handleFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WorkoutForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WorkoutBase;
