import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar02 from "../assets/img/im2.jpg";
import avatar01 from "../assets/img/im3.jpg";
import avatar03 from "../assets/img/im1.jpg";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

var c = 0
let work = []
function MyVerticallyCenteredModal(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const id = user.id;
  const exercise_list = {
    1: ["Running/jogging on a treadmill or outdoors", "Cycling (indoor or outdoor)", "Jumping rope", "High-intensity interval training (HIIT)", "Stair climbing", "Rowing"],
    2: ["Weightlifting (using dumbbells, barbells, or weight machines)", "Bodyweight exercises (push-ups, squats, lunges, planks)", "Resistance band exercises", "Kettlebell workouts", "Circuit training", "Powerlifting", "CrossFit-style workouts"],
    3: ["Stretching exercises", "Yoga poses and flows", "Pilates", "Foam rolling", "Mobility drills", "Dynamic warm-up exercises",],
    4: ["Zumba or dance fitness", "Aerobics", "Kickboxing", "Boot camp-style workouts", "Barre workouts", "Spinning/cycling classes", "Circuit training classes"],
    5: ["Swimming", "Rock climbing", "Kayaking/canoeing", "Stand-up paddleboarding (SUP)", "Tennis", "Soccer"],
    6: ["Meditation", "Tai Chi", "Qi Gong", "Mindful yoga", "Breathing exercises"]
  }


  let option = ``
  let dic = { 1: "Cardiovascular Workouts", 2: "Strength Training", 3: "Flexibility and Mobility", 4: "Group Fitness", 5: "Outdoor Activities", 6: "Mind-Body Exercises" }
  const [exercise, setexercise] = useState({
    user_id: id,
    workout_id: '',
    name: '',
    description: '',
  });

  const addopt = (e) => {
    if (c == 0) {
      c += 1
      option = `<option value="">Select a workout</option>`
      for (let i of work) {
        option += `<option value=${i.id}>${dic[i.id]}</option>`
      }
      document.getElementById(e.target.name).innerHTML = option
    }
  }



  useEffect(() => {

    axios.get(`https://8080-cabacffafefbebfbcddfeaeaadbdbabf.project.examly.io/users/${id}/workouts`)
      .then(res => {
        work = res.data
        console.log(work)
      })
      .catch(err => console.log(err));
  }, []);



  const onInputChange = (e) => {
    console.log(e.target.value)
    setexercise({ ...exercise, [e.target.name]: e.target.value });

  };

  const addexercise = (e) => {
    let temp = `<option value="">Select a Exercise</option>`
    console.log(e.target.name)
    let l = exercise_list[e.target.value].length
    for (let i = 0; i < l; i++) {
      temp += `<option value=${i + 1}>${exercise_list[e.target.value][i]}</option>`
    }
    document.getElementById('name').innerHTML = temp

  }

  const handelSubmit = (e)=>{
    // e.preventDefault();
    // try {

    //   const response = await axios.post(`https://8080-cabacffafefbebfbcddfeaeaadbdbabf.project.examly.io/users/${id}/workouts`, workout);
    //   console.log(response); // Handle the response as needed
    //   setWorkout({
    //     user_id: id,
    //     id: '',
    //     date: '',
    //     duration: '',
    //     notes: '',

    //   });
    //   alert("Workout Added Successfully");
    // } catch (error) {
    //   console.error(error);
    // }

  }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Exercise
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Workouts
              </label>
              <select
                className="form-control"
                id="workout_id"
                name="workout_id"
                onChange={function (event) { onInputChange(event); addexercise(event) }}
                onClick={addopt}
              >
                <option value="">Select a workout</option>
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
                onChange={onInputChange}
              >
                <option value="">Select a workout First</option>
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
                value={exercise.description}
                onChange={onInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Exercise
            </button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Tracking = () => {
  const hover = (e) => {
    console.log("hy")
    console.log(e)
    document.getElementsByClassName(e.target.name).style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  }

  const dehover = (e) => {
    console.log("hy")
    console.log(e.target.name)
    document.getElementsByClassName(e.target.name).style.boxShadow = "";
  }

  const [modalShow, setModalShow] = React.useState(false);
  const decount = () => {
    c = 0
  }

  return (
    <div>
      <header style={{ marginTop: "10px" }} >
        <Navbar />
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Card style={{ width: '18rem', border: "2px solid rgb(207, 117, 249)" }}>
              <Card.Img variant="top" src={avatar03} />
              <Card.Body>
                <Card.Title>Transform Yourself</Card.Title>
                <Card.Text>
                  Take the Next Step Towards a Healthier You: Activate Exercise Now!
                </Card.Text>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Add Exercise
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => { setModalShow(false); decount() }}
                />
              </Card.Body>
            </Card>
          </div>
          <div className='col'>
            <Card style={{ width: '18rem', border: "2px solid rgb(207, 117, 249)" }}>
              <Card.Img variant="top" src={avatar01} />
              <Card.Body>
                <Card.Title>Check Progress</Card.Title>
                <Card.Text>
                  Put Your Hard Work on Display: Show Your Exercise All Achievements!
                </Card.Text>
                <Button variant="primary">Show All Exercise</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col'>
            <Card name="card1" id="card1" className="card1" style={{ width: '18rem', border: "2px solid rgb(207, 117, 249)" }}>
              <Card.Img variant="top" src={avatar02} />
              <Card.Body>
                <Card.Title>Redefine Yourself</Card.Title>
                <Card.Text>
                  Customize Your Workout: Delete and Refine Your Exercise Selections!
                </Card.Text>
                <Button variant="primary">Update and Delete</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracking