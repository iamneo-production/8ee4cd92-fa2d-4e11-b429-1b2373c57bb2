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


function MyVerticallyCenteredModal(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const id = user.id;
  let work = []
  let dic = { 1: "Cardiovascular Workouts", 2: "Strength Training", 3: "Group Fitness", 4: "Outdoor Activities", 5: "Mind-Body Exercises" }
  const [exercise, setexercise] = useState({
    user_id: id,
    workout_id: '',
    name: '',
    description: '',
  });

  const addopt = () => {
    var x = document.getElementById("workout");
    for (let i of work) {
      var option = document.createElement("option");
      option.ineerHTML = dic[i.id];
      option.value=i.id;
      x.options.add(option);
    }
  }


  useEffect(() => {

    axios.get(`https://8080-cabacffafefbebfbcddfeaeaadbdbabf.project.examly.io/users/${id}/workouts`)
      .then(res => {
        work = res.data
        console.log(work)
        addopt();
      })
      .catch(err => console.log(err));
  }, []);



  const onInputChange = (e) => {
    setexercise({ ...exercise, [e.target.name]: e.target.value });
  };



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
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Workouts
          </label>
          <select
            className="form-control"
            id="workout"
            name="id"
            onChange={onInputChange}

          >
            <option value="">Select a workout</option>

          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Tracking = () => {
  const hover = (event) => {
    console.log("hy")
    alert(event.target.name)
    document.getElementsByClassName(event.target.name)[0].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  }

  const dehover = (event) => {
    document.getElementsByClassName(event.target.name).style.boxShadow = "";
  }

  const [modalShow, setModalShow] = React.useState(false);

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
                  onHide={() => setModalShow(false)}
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
            <Card name="card1" className="card1" onMouseUp={hover} onMouseDown={(e) => dehover(e)} style={{ width: '18rem', border: "2px solid rgb(207, 117, 249)" }}>
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