import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar01 from "../assets/img/im3.jpg";
import avatar03 from "../assets/img/im1.jpg";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


var c = 0

const decount = () => {
  c = 0
}


let work = []
let exercises = []
let dic = { 1: "Cardiovascular Workouts", 2: "Strength Training", 3: "Flexibility and Mobility", 4: "Group Fitness", 5: "Outdoor Activities", 6: "Mind-Body Exercises" }
let exercise_list = {
  1: ["Running/jogging on a treadmill or outdoors", "Cycling (indoor or outdoor)", "Jumping rope", "High-intensity interval training (HIIT)", "Stair climbing", "Rowing"],
  2: ["Weightlifting (using dumbbells, barbells, or weight machines)", "Bodyweight exercises (push-ups, squats, lunges, planks)", "Resistance band exercises", "Kettlebell workouts", "Circuit training", "Powerlifting", "CrossFit-style workouts"],
  3: ["Stretching exercises", "Yoga poses and flows", "Pilates", "Foam rolling", "Mobility drills", "Dynamic warm-up exercises",],
  4: ["Zumba or dance fitness", "Aerobics", "Kickboxing", "Boot camp-style workouts", "Barre workouts", "Spinning/cycling classes", "Circuit training classes"],
  5: ["Swimming", "Rock climbing", "Kayaking/canoeing", "Stand-up paddleboarding (SUP)", "Tennis", "Soccer"],
  6: ["Meditation", "Tai Chi", "Qi Gong", "Mindful yoga", "Breathing exercises"]
}

function AddExercises(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const uid = user.id;

  let option = ``
  const [exercise, setexercise] = useState({
    id: '',
    workout_id: '',
    name: '',
    description: '',
  });



  const addopt = (e) => {
    if (c == 0) {
      c += 1
      option = `<option value="">Select a workout</option>`
      for (let i of work) {

        option += `<option value=${i.id}>${dic[String(i.id).slice(1, 2)]}</option>`
      }
      document.getElementById(e.target.name).innerHTML = option
    }
  }



  useEffect(() => {

    axios.get(`http://localhost:8081/users/${uid}/workouts`)
      .then(res => {
        work = res.data
        console.log(work)
      })
      .catch(err => console.log(err));
  }, []);



  const onInputChange = (e) => {
    if (e.target.name === "name") {
      let vals = e.target.value.split("#")
      setexercise({ ...exercise, ['id']: exercise.workout_id + String(vals[1]), [e.target.name]: vals[0] });
    }
    else {
      setexercise({ ...exercise, [e.target.name]: e.target.value }
      )
    }

  };

  const addexercise = (e) => {
    let temp = `<option value="">Select a Exercise</option>`
    console.log(e.target.name)
    let l = exercise_list[String(e.target.value).slice(1, 2)].length
    for (let i = 0; i < l; i++) {
      temp += `<option value='${exercise_list[String(e.target.value).slice(1, 2)][i] + "#" + String(i + 1)}'>${exercise_list[String(e.target.value).slice(1, 2)][i]}</option>`
    }
    document.getElementById('name').innerHTML = temp

  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    const w_id = exercise.workout_id
    try {

      const response = await axios.post(
        `http://localhost:8081/workouts/${w_id}/exercises`,
        exercise);
      setexercise({ ...exercise, ['description']: "" });
      console.log(response);// Handle the response as needed

      alert("Exercise Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Failed")
    }

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




function ExerciseDisplay(props) {
  var status = 0;
  const [updateShow, setUpdateShow] = useState({
    uShow: false,
    updateId: ""
  });

  var option = ``

  const addopt = (e) => {
    if (c=== 0) {
      c += 1
      option = `<option value="">Select a workout</option>`
      for (let i of work) {

        option += `<option value=${i.id}>${dic[String(i.id).slice(1, 2)]}</option>`
      }
      document.getElementById(e.target.name).innerHTML = option
    }
  }

  const showeditform = (e) => {
    console.log(exercises)
    setUpdateShow({ ...updateShow, ["updateId"]: e.target.name, ["uShow"]: true })
  }

  const removeExercise = async (e) => {
    let temp = e.target.id.split("#")
    axios.delete(`http://localhost:8081/exercises/${temp[1]}`);
    status = 1
    let select = document.getElementById("workout_id");
    var option;
    for (var i = 0; i < select.options.length; i++) {
      option = select.options[i];

      if (option.value == temp[1]) {
        option.setAttribute('selected', true);

        break;
      }
    }
    const event = new Event("change", { bubbles: true });
    select.dispatchEvent(event);


  }

  const displayexercise = async (e) => {
    if (status === 1) {
      alert("Exercise Deleted")
      status = 0
    }

    axios.get(`http://localhost:8081/workouts/${e.target.value}/exercises`)
      .then(res => {
        exercises = res.data
        console.log(exercises)
        option = ``
        for (let i of exercises) {


          option += `<tr><th scope="row">${i.id}</th><td>${i.workout_id}</td><td>${i.name}</td><td>${i.description}</td>
          <td>
          <button type="button" class="btn btn-info" id=${i.id} name=${i.id} }>
          Edit</button>
          &nbsp; <button type="button" class="btn btn-danger" name=${e} id=${'remove' + '#' + String(i.id)}>Delete</button>
          </td></tr>`;



        }

        console.log(option)
        document.getElementById("exercisetable").innerHTML = option

        for (let i of exercises) {
          const element = document.getElementById(i.id).onclick = showeditform
          document.getElementById(('remove' + '#' + String(i.id))).onclick = removeExercise
        }
      })
      .catch(err => console.log(err));

  }

  return (
    <>
      <Modal
        size="xl"
        {...props}
        aria-labelledby="example-modal-sizes-title-lg"
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
              id="workout_id"
              name="workout_id"
              onChange={displayexercise}
              onClick={addopt}
            >
              <option value="">Select a workout</option>
            </select>
          </div>

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
              <tr>
                <th scope="col" colSpan="5">Select a Workout</th>
              </tr>

            </tbody>
            <UpdateExercise
              show={updateShow.uShow}
              onHide={() => { setUpdateShow({ ["uShow"]: false }); }}
              id={updateShow.updateId}
            />
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
}

let updatex = {}
function UpdateExercise(props) {

  for (let i of exercises) {
    if (i.id == props.id) {
      updatex = i
    }
  }

  let list = []
  let index = String(updatex.workout_id).slice(1, 2)
  for (let i in exercise_list[index]) {
    list.push(exercise_list[index][i])

  }

  const [updateExercise, setUpdateExercise] = useState({
    description: '',
  })


  const onInputChange = (e) => {
    setUpdateExercise({ ...updateExercise, [e.target.name]: e.target.value })

  };


  const saveChanges = () => {
    let updatelist = { 'workout_id': updatex.workout_id, }
    updatelist['id'] = updatex.id
    updatelist['name'] = updatex.name

    if (updateExercise.description == '') {
      updatelist['description'] = updatex.description

    }
    else {
      updatelist['description'] = updateExercise.description
    }
    console.log(updatelist)
    axios.put(`http://localhost:8081/exercises/${updatex.id}`, updatelist);
    alert("updated")
    setUpdateExercise({ ...updateExercise, ['description']: '' })


  }


  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Update Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form >
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Workout
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  value={dic[String(updatex.workout_id).slice(1, 2)]}
                  readOnly={true}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Exercise
                </label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  value={updatex.name}
                  readOnly={true}

                />

              </div>

              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={updateExercise.description}
                  onChange={onInputChange}
                ></textarea>
              </div>

              <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => { props.onHide(); saveChanges() }}>
                  Save Changes
                </Button>
              </Modal.Footer>

            </form>
          </div>
        </Modal.Body>
      </Modal>

    </>


  );
}

const Tracking = () => {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [lgShow, setLgShow] = useState(false);


  return (
    <div>
      <header style={{ marginTop: "10px" }} >
        <Navbar />
      </header>
      <div className='container'>
        <div className='row'>

          <Card className="text-black" style={{ backgroundColor: "rgb(207, 117, 249)" }}>
            <Card.Img src={avatar03} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'right', marginRight: '20px' }}>Transform Yourself</Card.Title>
              <Card.Text style={{ fontSize: '20px', textAlign: 'right', marginRight: '20px' }}>
                "Take the Next Step Towards a Healthier You:<br /> Activate Exercise Now!"
              </Card.Text>
              <Card.Text style={{ textAlign: 'right', marginTop: '50px', marginRight: '20px' }}><Button variant="primary" onClick={() => setModalShow(true)}>Add Exercise</Button>
                <AddExercises
                  show={modalShow}
                  onHide={() => { setModalShow(false); decount() }}
                />
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className='row'>
          <Card className="text-black" style={{ backgroundColor: "rgb(207, 117, 249)" }}>
            <Card.Img src={avatar01} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'left', marginLeft: '20px' }}>Redefine Yourself</Card.Title>
              <Card.Text style={{ fontSize: '20px', textAlign: 'left', marginLeft: '20px' }}>
                "Customize Your Workout:<br /> Delete and Refine Your Exercise Selections!"
              </Card.Text>
              <Card.Text style={{ textAlign: 'left', marginTop: '50px', marginLeft: '20px' }}><Button variant="primary" onClick={() => setLgShow(true)}>Update and Delete</Button>
                <ExerciseDisplay
                  show={lgShow}
                  onHide={() => { setLgShow(false); decount() }}
                />
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

        </div>
      </div>
    </div>
  )
}


export default Tracking;