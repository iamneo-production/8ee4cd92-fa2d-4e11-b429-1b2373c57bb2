import Navbar from '../layout/Navbar';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Tab } from 'react-bootstrap';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { getRelativePosition } from 'chart.js/helpers';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const Graph =()=> {

    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);
    const [exerciseName, setExerciseName] = useState('');
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [updateWorkout, setUpdateWorkout] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [workoutData, setWorkoutData] = useState([]);
    const [updatedWorkout, setUpdatedWorkout] = useState({
        id: "",
        date: "",
        duration: "",
        notes: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [workouts, setWorkouts] = useState([]);
    const labels = []
    const ydata = []
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    var date = ""

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


    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get(`https://8080-deadefebdddbeefbebfbcddfeaeaadbdbabf.project.examly.io/users/${userId}/workouts`);
                const data = response.data.sort(function (first, second) {
                    return (first.date < second.date ? -1 : 1);
                });
                setWorkouts(data);
                setWorkoutData(data);
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchWorkouts();
    }, [userId]);

    for (var i of workouts) {
        labels.push(i.date)
        ydata.push(i.duration)

    }

    const handleUpdateWorkout = (workout) => {
        setUpdateWorkout(workout); // Set the workout to be updated
        setShowUpdateModal(true); // Show the modal for updating the workout
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(
                `https://8080-deadefebdddbeefbebfbcddfeaeaadbdbabf.project.examly.io/workouts/${updateWorkout.id}`,
                updatedWorkout
            );
            const updatedWorkoutData = workoutData.map((item) =>
                item.id === updateWorkout.id ? response.data : item
            );
            setWorkoutData(updatedWorkoutData);
            alert('Workout Updated Successfully');
            handleCloseUpdateModal();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteWorkout = (id) => {
        axios
            .delete(`https://8080-deadefebdddbeefbebfbcddfeaeaadbdbabf.project.examly.io/workouts/${id}`)
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
            await axios.post(`https://8080-deadefebdddbeefbebfbcddfeaeaadbdbabf.project.examly.io/workouts/${selectedWorkout.id}/exercises`, exercise);
            setSelectedWorkout(null);
            setShowUpdateModal(false);
            setExerciseName('');
            setExerciseDescription('');
        } catch (error) {
            console.error(error);
        }
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Workout History',
            },
            tooltip: {
                // Tooltip will only receive click events
                events: ['mousemove', 'mouseout', 'touchstart', 'touchmove']
            },

        },
        onClick: (e) => {
            console.log(e)
            handleShow()
            const canvasPosition = getRelativePosition(e, e.chart);
            var datax = e.chart.scales.x.getValueForPixel(canvasPosition.x);
            date = workouts[parseInt(datax)].date
            alert(workouts[parseInt(datax)].date)
            setSelectedDate(new Date(date));
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "Last 30 days",
                data: ydata,
                borderColor: '#9366fa',
                backgroundColor: '#92109c',
            },
        ],
    };

    const handleCloseUpdateModal = () => {
        setSelectedWorkout(null);
        setShowUpdateModal(false);
        setExerciseName('');
        setExerciseDescription('');
    };


    return <><Navbar />
        <Line options={options} data={data} height={'125%'} />

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                                        <br />

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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Your Workout {selectedWorkout && selectedWorkout.notes}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleUpdate}>
                    <Form.Group controlId='updateDate'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type='date'
                            value={updatedWorkout.date}
                            onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, date: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId='updateDuration'>
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                            type='number'
                            value={updatedWorkout.duration}
                            onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, duration: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId='updateNotes'>
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            value={updatedWorkout.notes}
                            onChange={(e) => setUpdatedWorkout({ ...updatedWorkout, notes: e.target.value })}
                            required
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Update Workout
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    </>;
}

export default Graph;