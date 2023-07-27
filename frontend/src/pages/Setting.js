
import React, { useState , useEffect} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "../style/Setting.css";
import Navbar from '../layout/Navbar'
import axios from 'axios';
import { useNavigate, useParams,Link} from 'react-router-dom';
import { api } from '../APIConnect';
import { toast } from 'react-toastify';

const Setting = () => {
  const [showModal, setShowModal] = useState(false);
  const [goalName, setGoal] = useState('');
  const [description, setDescription] = useState('');
  const [targetWeight, setTargetWeight] = useState(0);
  const [duration, setDuration] = useState('');

  const {id} = useParams();

  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleTargetWeightChange = (e) => {
    setTargetWeight(e.target.value);
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    if (goalName.trim() === '' || duration.trim() === '' || targetWeight === 0) {
      return toast.error("Please enter valid details..");
    };
    const user_id = user.id;
    const date = new Date().toISOString().split('T')[0];
    const goalItem = {date,description,duration,goalName,user_id,targetWeight};
    console.log(goalItem);
    if(id){
      toast.success("Goal updated Successfully.");
      axios.put(`${api}goal/${id}`,goalItem)
      .then(navigate("/view-goals"));
    }
    else{
      toast.success("Goal Created Successfully.");
      console.log(goalItem);
      axios.post(`${api}goal`,goalItem)
      .then(navigate("/view-goals"));
      setGoal('');
      setDescription('');
      setDuration('');
      setTargetWeight(0);
    }
  };

  

  useEffect(()=>{
    axios.get(`${api}goal/${id}`)
    .then((response) => {
      setGoal(response.data.goalName)
      setDescription(response.data.description)
      setDuration(response.data.duration)
      setTargetWeight(response.data.targetWeight)
      setShowModal(true)
    }).catch(error => {
            console.log(error)
        })
  },[id])


  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

 
  return (
    <>
    <div>
      <header>
        <Navbar />
      </header>
    </div>
    <div class="card text-white bg-secondary mb-3 " style={{width:1150,marginLeft:50,height:500,marginTop:20}}>
    <div className='main'>
        <div className='goalButton'>
            <h3>Set Your Goal</h3>
            <p className='text-white'>"Your only competition is the person you <br/> were yesterday."</p>
            <Button variant="primary" onClick={handleShowModal} >
                  Add Goal
            </Button>
        <br/>

            <Link to={"/view-goals"} className="btn btn-info" role="button" style={{marginTop:20}}>
              View Goals
            </Link>
      
        </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Fitness Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="fitness-goal-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Goal:</label>
          <select value={goalName} onChange={handleGoalChange} className="drop-down">
          <option value="">Select a goal</option>
          <option value="weight gain">Weight Gain</option>
          <option value="weight loss">Weight Loss</option>
        </select>
        </div>
        <div className="form-mem">
          <label className="description">Description:</label>
          <div className="form-con">
          <input
            type="text-area"
            value={description}
            onChange={handleDescriptionChange}
            className='form-tex'
            placeholder='Enter description for your goal..'
          /></div>
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <select value={duration} onChange={handleDurationChange} className="drop-down">
            <option>select the duration</option>
            <option value="1 month">1 month</option>
            <option value="2 months">2 months</option>
            <option value="3 months">3 months</option>
            <option value="4 months">4 months</option>
            <option value="5 months">5 months</option>
            <option value="6 months">6 months</option>
            <option value="7 months">7 months</option>
            <option value="8 months">8 months</option>
            <option value="9 months">9 months</option>
            <option value="10 months">10 months</option>
            <option value="11 months">11 months</option>
            <option value="12 months">12 months</option>
          </select>
        </div>
        <div className="form-mem" >
          <label className='targetWeight'>Target Weight:</label>
          <div className="form-con">
          <input
            type="number"
            min="0"
            value={targetWeight}
            onChange={handleTargetWeightChange}
            className='form-tex'
          />
          </div>
        </div>
        <button type="submit" className="button">Add Goal</button>
      </form>
    </div>
        </Modal.Body>
      </Modal>
    </div>
    </div>
    </>
  );
};


export default Setting;

