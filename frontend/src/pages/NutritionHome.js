import React from 'react';
import Navbar from '../layout/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jogging from "../assets/img/jogging.jpg";
import MuscleGain from "../assets/img/muscleGain.jpg"
import { useNavigate } from 'react-router-dom';





const NutritionHome = () => {
  


  let navigate = useNavigate();

  const handleWeightLoss = () =>{
    navigate('/nutritionWeightLoss');
  }

  const handleWeightGain = () =>{
    navigate('/nutritionWeightGain');
  }


  return (
    <div>
      <header style={{ marginTop: "10px" }} >
        <Navbar />
      </header>
      <div className='container'>

        <div className='row'>

          <Card className="text-black">
            <Card.Img style={{ height: '100%',width: '100%'}} src={Jogging} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'right', marginRight: '20px' }}>Fat Burner Section</Card.Title>
              <Card.Text style={{ fontSize: '20px', textAlign: 'right', marginRight: '20px' }}>
                "It’s Not A Diet, <br></br><b>It’s A Lifestyle Change"</b>
              </Card.Text>
              <Card.Text style={{ textAlign: 'right', marginTop: '50px', marginRight: '20px' }}>
                <Button variant="primary" onClick={handleWeightLoss}>To Burn Fat</Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

        </div>
        <div className='row'>
          <Card className="text-black">
            <Card.Img src={MuscleGain} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ marginTop: '20px', fontSize: '20px', textAlign: 'left', marginLeft: '20px' }}>Muscle Gainer</Card.Title>
              <Card.Text style={{ fontSize: '20px', textAlign: 'left', marginLeft: '20px' }}>
                "The only way to define your limits<br></br> <b>is by going beyond them</b>"
              </Card.Text>
              <Card.Text style={{ textAlign: 'left', marginTop: '50px', marginLeft: '20px' }}>
                <Button variant="primary"  onClick={handleWeightGain}>To Gain Muscle</Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

        </div>
      </div>
    </div>
  )
}


export default NutritionHome;