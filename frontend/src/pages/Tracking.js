import React, { useState, useEffect } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import avatar01 from "../assets/img/im3.jpg";
import avatar03 from "../assets/img/im1.jpg";
import Navbar from '../layout/Navbar';
import axios from 'axios';
import { api } from '../APIConnect';
import { toast } from 'react-toastify';
import picstrike from '../assets/img/goal.png';

function getDaysDifference(dateString1, dateString2) {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const differenceInMs = date2 - date1;
  
  const daysDifference = differenceInMs / (1000 * 60 * 60 * 24);
  
 
  return Math.round(daysDifference);
}


let exercise_list = {
}

function Tracking() {
    const [addExerciseModelShow, setAddExerciseModelShow] = useState(false);
    const handleAddExerciseModelClose = () => setAddExerciseModelShow(false);
    const handleAddExerciseModelShow = () => setAddExerciseModelShow(true);

    const [dispalyExerciseModelShow, setDispalyExerciseModelShow] = useState(false);
    const handleDispalyExerciseModelClose = () => setDispalyExerciseModelShow(false);
    const handleDispalyExerciseModelShow = () => setDispalyExerciseModelShow(true);

    const [updateExerciseModelShow, setUpdateExerciseModelShow] = useState(false);
    const handleUpdateExerciseModelClose = () => setUpdateExerciseModelShow(false);
    const handleUpdateExerciseModelShow = () => setUpdateExerciseModelShow(true);

    const [exercises, setExercises] = useState([]);
    const [uniqueWorkoutIds, setUniqueWorkoutIds] = useState([]);

    const [exerciseOfWorkout, setExerciseOfWorkout] = useState("");
    const [workoutByIds, setWorkoutByIds] = useState([])
    const user = JSON.parse(localStorage.getItem('user'));
    const uid = user.id;

    const [exerxiseList] = useState({
        "Cardiovascular Workouts": ["Select a Exercise", "Running/jogging on a treadmill or outdoors", "Cycling (indoor or outdoor)", "Jumping rope", "High-intensity interval training (HIIT)", "Stair climbing", "Rowing"],
        "Strength Training": ["Select a Exercise", "Weightlifting (using dumbbells, barbells, or weight machines)", "Bodyweight exercises (push-ups, squats, lunges, planks)", "Resistance band exercises", "Kettlebell workouts", "Circuit training", "Powerlifting", "CrossFit-style workouts"],
        "Flexibility and Mobility": ["Select a Exercise", "Stretching exercises", "Yoga poses and flows", "Pilates", "Foam rolling", "Mobility drills", "Dynamic warm-up exercises",],
        "Group Fitness": ["Select a Exercise", "Zumba or dance fitness", "Aerobics", "Kickboxing", "Boot camp-style workouts", "Barre workouts", "Spinning/cycling classes", "Circuit training classes"],
        "Outdoor Activities": ["Select a Exercise", "Swimming", "Rock climbing", "Kayaking/canoeing", "Stand-up paddleboarding (SUP)", "Tennis", "Soccer"],
        "Mind-Body Exercises": ["Select a Exercise", "Meditation", "Tai Chi", "Qi Gong", "Mindful yoga", "Breathing exercises"]
    });

    const [newExercise, setNewExercise] = useState({
        id: '',
        workout: "no choice",
        workoutId: '',
        name: '',
        description: '',
    })

    const [updateExercise, setUpdateExercise] = useState({
        id: '',
        workout: '',
        workoutId: '',
        name: '',
        description: '',
    })


    const handleOnChangeExercise = (e) => {
        setNewExercise({ ...newExercise, [e.target.name]: e.target.value })
    }

    const handleOnChangeWorkout = (e) => {
        setExerciseOfWorkout(e.target.value)
    }

    const handleSubmitAddNewExercise = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${api}workouts/${newExercise.workoutId}/exercises`,
                { workoutId: newExercise.workoutId, name: newExercise.name, description: newExercise.description });
            toast.success("Exercise Added Successfully");
            handleUpdateStrike();
            
        } catch (error) {
            toast.error("Failed To Add")
        }
    }

    const handleDeleteExerciseById = async (id) => {
        try {
            await axios.delete(`${api}exercise/${id}`);
            setExercises(exercises.filter((item) => item.id !== id));
            toast.warning("Exercise Deleted Successfully")
        } catch (error) {
            toast.error("Failed To Delete")
        }
    }

    const handleUpdateExerciseForm = (exercise) => {
        setUpdateExercise({ ...updateExercise, ["id"]: exercise.id, ["workoutId"]: exercise.workoutId, ['workout']: exerciseOfWorkout, ["name"]: exercise.name, ['description']: exercise.description })
    }

    const handleOnChangeUpdateExercise = (e) => {
        setUpdateExercise({ ...updateExercise, [e.target.name]: e.target.value })
    }

    const handleUpdateExerciseSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `${api}exercise/${updateExercise.id}`,
                { workoutId: updateExercise.workoutId, name: updateExercise.name, description: updateExercise.description });
            setExercises((prevExercises) =>
                prevExercises.map((exercise) =>
                    exercise.id === updateExercise.id
                        ? {
                            id: updateExercise.id,
                            workoutId: updateExercise.workoutId,
                            name: updateExercise.name,
                            description: updateExercise.description,
                        }
                        : exercise
                )
            ); toast.info("Exercise Updated Successfully");
        } catch (error) {
            toast.error("Failed To Update")
        }
    }

    const handleUpdateStrike = async () => {
    var date = new Date()
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var today = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`
    const response = await axios.get(`${api}strike/${uid}`);
    var strike=response.data
    console.log(strike)
    if (strike == "") {
      const res = await axios.post(`${api}strike/${uid}`, { "currentStrike": 1, "previousDate": today, "maxStrike": 1 });
      toast.success("yohooo! +1 Strike", {
        icon:{picstrike}
      });
    }
    else {
      const daysDifference = getDaysDifference(response.data.previousDate, today)
      console.log(daysDifference)
      if (daysDifference === 1) {
        var currentStrike = response.data.currentStrike + 1
        const res = await axios.put(`${api}strike/${uid}`, { "currentStrike": currentStrike, "previousDate": today, "maxStrike": Math.max(strike.maxStrike, currentStrike) });
      }
      else if (daysDifference > 1) {
        const res = await axios.put(`${api}strike/${uid}`, { "currentStrike": 1, "previousDate": today, "maxStrike": Math.max(strike.maxStrike, 1) });

      }
      toast.success("yohooo! +1 Strike", {
        icon:{picstrike}
      });
    }

  }



    const fetchWorkoutData = async () => {
        const res = await axios.get(`${api}users/${uid}/workouts`);
        var uniqueworkout = {}
        res.data.forEach((item) => {
            if (typeof (uniqueworkout[item.notes]) === 'undefined') {
                uniqueworkout[item.notes] = ["Select a Workout ID", item.id]
            }
            else {
                uniqueworkout[item.notes].push(item.id)
            }

        })
        setUniqueWorkoutIds(uniqueworkout)
    }

    const fetchExerciseData = (e) => {
        var ids = uniqueWorkoutIds[e.target.value].slice(1);
        console.log(ids);
        setExercises([]);
        // Use Promise.all to wait for all API requests to complete
        Promise.all(
            ids.map((id) => axios.get(`${api}workouts/${id}/exercises`))
        )
            .then((responses) => {
                // Extract the data from each response and concatenate them into a single array
                const exerciseData = responses.flatMap((res) => res.data);

                setExercises(exerciseData);

                console.log(exerciseData);
            })
            .catch((err) => {
                console.log(err);
            });
    };



    useEffect(() => {
        fetchWorkoutData()

    }, [])



    return (
        <div>
            <header style={{ marginTop: "10px" }} >
                <Navbar />
            </header>
            <div className='container'>

                {/* Card for Add Exercises */}
                <div className='row'>
                    <Card className="text-black" style={{ backgroundColor: "rgb(207, 117, 249)" }}>
                        <Card.Img src={avatar03} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'right', marginRight: '20px' }}>Transform Yourself</Card.Title>
                            <Card.Text style={{ fontSize: '20px', textAlign: 'right', marginRight: '20px' }}>
                                "Take the Next Step Towards a Healthier You:<br /> Activate Exercise Now!"
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'right', marginTop: '50px', marginRight: '20px' }}>
                                <Button variant="primary" onClick={handleAddExerciseModelShow}>Add Exercise</Button>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                {/* Card For update and delete Exercise */}
                <div className='row'>
                    <Card className="text-black" style={{ backgroundColor: "rgb(207, 117, 249)" }}>
                        <Card.Img src={avatar01} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'left', marginLeft: '20px' }}>Redefine Yourself</Card.Title>
                            <Card.Text style={{ fontSize: '20px', textAlign: 'left', marginLeft: '20px' }}>
                                "Customize Your Workout:<br /> Delete and Refine Your Exercise Selections!"
                            </Card.Text>
                            <Card.Text style={{ textAlign: 'left', marginTop: '50px', marginLeft: '20px' }}>
                                <Button variant="primary" onClick={handleDispalyExerciseModelShow}>Update and Delete</Button>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

            </div>

            {/* Add Exercise Modals */}
            <Modal
                show={addExerciseModelShow}
                onHide={handleAddExerciseModelClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form onSubmit={handleSubmitAddNewExercise}>
                            <div className="mb-3">
                                <label htmlFor="workout" className="form-label">
                                    Workouts
                                </label>
                                <select
                                    className="form-control"
                                    id="workout"
                                    name="workout"
                                    onChange={handleOnChangeExercise}
                                    required={true}
                                >
                                    <option value="no choice">Select a workout</option>
                                    {Object.entries(uniqueWorkoutIds).map(([key, value]) => (
                                        <option value={key}>{key}</option>
                                    ))}

                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">
                                    Workout ID
                                </label>
                                <select
                                    className="form-control"
                                    id="workoutId"
                                    name="workoutId"
                                    onChange={handleOnChangeExercise}
                                    required={true}
                                >
                                    {typeof (uniqueWorkoutIds[newExercise.workout]) != 'undefined' ?
                                        (uniqueWorkoutIds[newExercise.workout].map((key) => (
                                            <option value={key}>{key}</option>
                                        ))) : (<option>Please Select a Workout First</option>
                                        )
                                    }

                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">
                                    Exercise
                                </label>
                                <select
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    onChange={handleOnChangeExercise}
                                    required={true}
                                >
                                    {typeof (exerxiseList[newExercise.workout]) != 'undefined' ? (exerxiseList[newExercise.workout].map((value) => (
                                        <option value={value}>{value}</option>
                                    ))) : (<option>Select a Workout First</option>)}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="notes" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    value={newExercise.description}
                                    onChange={handleOnChangeExercise}
                                    required={true}
                                ></textarea>
                            </div>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleAddExerciseModelClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary">Add Exercise</Button>
                            </Modal.Footer>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Show All Exercise Models */}
            <Modal
                size="xl"
                aria-labelledby="example-modal-sizes-title-lg"
                show={dispalyExerciseModelShow}
                onHide={handleDispalyExerciseModelClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Exercises
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label" style={{ fontWeight: "bold" }}>
                            Workouts
                        </label>
                        <select
                            className="form-control"
                            id="workoutId"
                            name="workoutId"
                            onChange={(e) => { handleOnChangeWorkout(e); fetchExerciseData(e) }}
                        >
                            <option value="no choice">Select a workout</option>
                            {Object.entries(uniqueWorkoutIds).map(([key, value]) => (
                                <option value={key}>{key}</option>
                            ))}

                        </select>
                    </div>

                    {(exercises.length === 0) ? (
                        <p>Select a Workout First</p>
                    ) : (
                        <table className="table table-hover" >
                            <thead className="table-light" >
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Workout ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Perform Action</th>
                                </tr>
                            </thead>
                            <tbody id="exercisetable">
                                {exercises.map((item) => (
                                    <tr>
                                        <td scope="col" >{item.id}</td>
                                        <td scope="col" >{item.workoutId}</td>
                                        <td scope="col" >{item.name}</td>
                                        <td scope="col" >{item.description}</td>
                                        <td scope="col" >
                                            <button type="button" class="btn btn-info" onClick={() => { handleUpdateExerciseModelShow(); handleUpdateExerciseForm(item) }}>Edit</button>
                                            &nbsp;
                                            <button type="button" class="btn btn-danger" onClick={() => handleDeleteExerciseById(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    )}
                </Modal.Body>
            </Modal>


            {/* Update Exercise Model */}
            <Modal
                show={updateExerciseModelShow}
                onHide={handleUpdateExerciseModelClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form onSubmit={handleUpdateExerciseSubmit }>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">
                                    ID
                                </label>
                                <input className="form-control" id="id" name="id" value={updateExercise.id} readOnly={true}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">
                                    Workout ID
                                </label>
                                <input className="form-control" id="workoutId" name="workoutId" value={updateExercise.workoutId} readOnly={true}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">
                                    Exercise
                                </label>
                                <select
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    onChange={handleOnChangeUpdateExercise}
                                    required={true}
                                >
                                    {typeof (exerxiseList[exerciseOfWorkout]) != 'undefined' ? (exerxiseList[exerciseOfWorkout].map((value) => (
                                        value === updateExercise.name ? (<option value={value} selected>{value}</option>) : (<option value={value}>{value}</option>)
                                    ))) : (<option>Select a Workout First</option>)}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="notes" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    onChange={handleOnChangeUpdateExercise}
                                    value={updateExercise.description}
                                    required={true}
                                ></textarea>
                            </div>
                            <Modal.Footer>
                                <Button variant="secondary" onChange={handleUpdateExerciseModelClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary">Add Exercise</Button>
                            </Modal.Footer>
                        </form>
                    </div>

                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Tracking





