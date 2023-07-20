import React, { useState, useEffect } from 'react';
import { Button, Card, Modal, Table } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import gymVideo1 from '../assets/vid/gym.mp4';
import gymVideo2 from '../assets/vid/gym1.mp4';
import { api } from '../APIConnect';
import { toast } from 'react-toastify';

const WorkoutBase = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
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
      console.log(workout);
      const response = await axios.post(`${api}users/${uid}/workouts`, workout);
      console.log(response); // Handle the response as needed
      setWorkout({
        user_id: uid,
        id: '',
        date: '',
        duration: '',
        notes: ''
      });
      toast.info('Workout Added Successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(`${api}users/${uid}/workouts`);
      console.log(response)
      const sortedWorkouts = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setAllWorkouts(sortedWorkouts);
    } catch (error) {
      console.error(error);
    }
  };

  
  const deleteWorkout = async (workoutId) => {
    try {
      await axios.delete(`${api}workout/${workoutId}`);
      setAllWorkouts(allWorkouts.filter((workout) => workout.id !== workoutId));
      toast.warning('Workout Deleted Successfully');
    } catch (error) {
      console.error(error);
    }
  };


useEffect(() => {
  fetchWorkouts();
}, []);

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
  <>
  <div>
  <header style={{ marginTop: '10px' }}>
    <Navbar />
  </header>
  <div className="container">
  <div
          className="row"
        >
    <Card className="text-black" style={{ backgroundColor: "transparent" }}>
    <video src={gymVideo1} autoPlay loop muted />
      <Card.ImgOverlay>
        <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'right', marginRight: '20px', color: 'white' }}>Craft Your Fitness Journey</Card.Title>
        <Card.Text style={{ fontSize: '20px', textAlign: 'right', marginRight: '20px', color: 'white' }}>
          "Create your personalized fitness journey with ease. <br /> Add a workout and take a step towards a healthier you!"
        </Card.Text>
        <Card.Text style={{ textAlign: 'right', marginTop: '50px', marginRight: '20px' }}><Button variant="primary" onClick={handleFormModal}>
                  Add a Workout
                </Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
      <div className='row'>
    <Card className="text-black" style={{ backgroundColor: "transparent" }}>
    <video src={gymVideo2} autoPlay loop muted />
      <Card.ImgOverlay>
        <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'left', marginLeft: '20px', color: 'white' }}>Unveil Your Workout Gallery</Card.Title>
        <Card.Text style={{ fontSize: '20px', textAlign: 'left', marginLeft: '20px', color: 'white' }}>
          "Stay on top of your fitness game with our comprehensive workout tracking. <br /> 
        </Card.Text>
        <Card.Text style={{ textAlign: 'left', marginTop: '50px', marginLeft: '20px' }}>                <Button
                  variant="primary"
                  onClick={() => {
                    fetchWorkouts();
                    handleModal();
                  }}
                >
                  Show All Workouts
                </Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  </div>
    </div>
  </div>
    <Modal
      size="xl"
      aria-labelledby="example-modal-sizes-title-lg"
      show={showModal}
      onHide={handleModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">All Workouts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {allWorkouts.length === 0 ? (
          <p>No workouts found. Start working out {user.name} !</p>
        ) : (
          <Table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Duration (minutes)</th>
                <th>Type of Workout</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allWorkouts.map((workout) => (
                <tr key={workout.id}>
                  <td>{workout.date}</td>
                  <td>{workout.duration}</td>
                  <td>{workout.notes}</td>
                  <td><button
                      className="btn btn-danger"
                      onClick={() => deleteWorkout(workout.id)}
                    >
                      Delete
                    </button></td>
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
  </>
);
};

export default WorkoutBase;
