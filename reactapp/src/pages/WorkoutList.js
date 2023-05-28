import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../layout/Navbar';
import { Modal, Button, Form } from 'react-bootstrap';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [exercises, setExercises] = useState([]);
  const [showSetsModal, setShowSetsModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [sets, setSets] = useState([]);
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/users/${userId}/workouts`);
        setWorkouts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkouts();
  }, [userId]);

  const handleShowExercises = async (workoutId) => {
    try {
      const response = await axios.get(`http://localhost:8081/workouts/${workoutId}/exercises`);
      setExercises(response.data);
      setSelectedWorkout(workouts.find((workout) => workout.id === workoutId));
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowSets = async (exerciseId) => {
    try {
      const response = await axios.get(`http://localhost:8081/exercises/${exerciseId}/sets`);
      setSets(response.data);
      setSelectedExercise(exercises.find((exercise) => exercise.id === exerciseId));
      setShowSetsModal(true);
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

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
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

  const handleSetsFormSubmit = async (event) => {
    event.preventDefault();

    const set = {
      exerciseId: selectedExercise.id,
      reps,
      weight,
      duration
    };

    try {
      await axios.post(`http://localhost:8081/exercises/${selectedExercise.id}/sets`, set);
      setSelectedExercise(null);
      setShowSetsModal(false);
      setReps('');
      setWeight('');
      setDuration('');
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

  const handleCloseSetsModal = () => {
    setSelectedExercise(null);
    setShowSetsModal(false);
    setReps('');
    setWeight('');
    setDuration('');
  };

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
                <th>Workout ID</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout.id}>
                  <td>{workout.id}</td>
                  <td>{workout.notes}</td>
                  <td>
                    <button
                      className='btn btn-secondary ml-2'
                      onClick={() => handleShowExercises(workout.id)}
                    >
                      Show Exercises
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedWorkout && `Exercises for ${selectedWorkout.notes}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {exercises.length > 0 ? (
            <table className='table'>
              <thead>
                <tr>
                  <th>Exercise ID</th>
                  <th>Exercise Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise) => (
                  <tr key={exercise.id}>
                    <td>{exercise.id}</td>
                    <td>{exercise.name}</td>
                    <td>
                      <button
                        className='btn btn-secondary ml-2'
                        onClick={() => handleShowSets(exercise.id)}
                      >
                        Add Sets
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No exercises found.</p>
          )}
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId='exerciseName'>
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control
                as='select'
                value={exerciseName}
                onChange={handleExerciseNameChange}
                required
              >
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
                    {selectedWorkout.notes === 'Strength Training' && ( 
                      <>
                        <option value='Weightlifting'>Weightlifting</option>
                        <option value='Bodyweight Exercises'>Bodyweight Exercises</option>
                        <option value='Resistance Band Exercises'>Resistance Band Exercises</option>
                        <option value='Kettlebell workouts'>Kettlebell workouts</option>
                        <option value='Circuit training'>Circuit training</option>
                        <option value='Powerlifting'>Powerlifting</option>
                        <option value='CrossFit-style workouts'>CrossFit-style workouts</option>
                        </>
                    )}
                    {selectedWorkout.notes === 'Flexibility and Mobility' && (  
                      <>
                        <option value='Yoga'>Yoga</option>
                        <option value='Pilates'>Pilates</option>
                        <option value='Foam Rolling'>Foam Rolling</option>
                        <option value='Mobility Drills'>Mobility Drills</option>
                        <option value='Dynamic Warm-up Exercises'>Dynamic Warm-up Exercises</option>
                        </>
                    )}
                    {selectedWorkout.notes === 'Group Fitness' && (
                      <>
                        <option value='Zumba'>Zumba</option>
                        <option value='Aerobics'>Aerobics</option>
                        <option value='Kickboxing'>Kickboxing</option>
                        <option value='Barre'>Barre</option>
                        <option value='Bootcamp'>Bootcamp</option>
                        </>
                    )}
                  </>
                )}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='exerciseDescription'>
              <Form.Label>Exercise Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={exerciseDescription}
                onChange={handleExerciseDescriptionChange}
                required
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add Exercise
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showSetsModal} onHide={handleCloseSetsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sets for {selectedExercise && selectedExercise.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className='table'>
            <thead>
              <tr>
                <th>Set ID</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {sets.map((set) => (
                <tr key={set.id}>
                  <td>{set.id}</td>
                  <td>{set.reps}</td>
                  <td>{set.weight}</td>
                  <td>{set.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Form onSubmit={handleSetsFormSubmit}>
            <Form.Group controlId='reps'>
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type='number'
                value={reps}
                onChange={handleRepsChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='weight'>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type='number'
                value={weight}
                onChange={handleWeightChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='duration'>
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type='number'
                value={duration}
                onChange={handleDurationChange}
                required
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add Set
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WorkoutList;
