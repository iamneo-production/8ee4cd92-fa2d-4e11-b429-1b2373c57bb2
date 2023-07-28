import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorkoutTrack.css';
import Card from 'react-bootstrap/Card';
import pic1 from '../assets/img/user.png';
import pic2 from '../assets/img/protection.png';
import pic3 from '../assets/img/returning-visitor.png';
import AdminNavbar from '../layout/AdminNavbar';
import { api } from '../APIConnect';

const AdminDashboard = () => {
  const [greeting, setGreeting] = useState('');
  const [users,setUsers]=useState(0);
  const [admins,SetAdmins]=useState(0);
  const admin = JSON.parse(localStorage.getItem('admin'));

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    fatchTotalWorkers();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const fatchTotalWorkers= async()=>{
    try{
      const response = await axios.get(`${api}user`)
      let us=0
      let ad=0
      response.data.map((item)=>{
        if(item.role=='ADMIN'){
          ad+=1
        }
        else{
          us+=1
        }
      })
      setUsers(us)
      SetAdmins(ad)
    }
    catch (error){
      console.log(error)
    }
  }

  const getProgressStyles1 = (percentage) => ({
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '5px solid #d6d6d6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: '#000',
    background: `conic-gradient(#546de5 ${percentage}%, #ffffff ${percentage}% 100%)`,
  });

  const getProgressStyles2 = (percentage) => ({
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '5px solid #d6d6d6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: '#000',
    background: `conic-gradient(#ffa502 ${percentage}%, #ffffff ${percentage}% 100%)`,
  });

  const getProgressStyles3 = (percentage) => ({
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '5px solid #d6d6d6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: '#000',
    background: `conic-gradient(#ff6348 ${percentage}%, #ffffff ${percentage}% 100%)`,
  });

  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  return (
    <>
      <div className='container'>
        <header>
          <AdminNavbar />
        </header>
        <div className='maindiv'>
          <div className='greet'>
            {greeting}, {admin.name} :)
          </div>
          <div className='welcome'>
            Welcome, to CalorieCloud
          </div>

          <div width='100%' className='cardData'>
          <Card style={{ width: '18rem', backgroundColor: 'white' }}>
              <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',padding: '20px',}}>
                <Card.Img variant="left" src={pic1} style={{width: '70px',marginRight: '20px',}} />
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text>
                    {users}
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: 'white' }}>
              <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',padding: '20px',}}>
                <Card.Img variant="left" src={pic2} style={{width: '70px',marginRight: '20px',}} />
                <Card.Body>
                  <Card.Title>Total Admins</Card.Title>
                  <Card.Text>
                    {admins}
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: 'white' }}>
              <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',padding: '20px',}}>
                <Card.Img variant="left" src={pic3} style={{width: '70px',marginRight: '20px',}} />
                <Card.Body>
                  <Card.Title>Today's Visitors</Card.Title>
                  <Card.Text>
                    40
                  </Card.Text>
            
                </Card.Body>
              </div>
            </Card>

          </div>

          <div width='100%' className='cardData'>
            <Card style={{ width: '18rem', backgroundColor: 'white' }}>
              <Card.Body>

                <Card.Title>No. of Visitors</Card.Title>
                <Card.Text style={cardStyles}>
                  <div style={getProgressStyles1(60)}>
                    {`${60}%`}
                  </div>
                </Card.Text>

              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: 'white' }}>
              <Card.Body>

                <Card.Title>Sales</Card.Title>
                <Card.Text style={cardStyles}>
                  <div style={getProgressStyles2(75)}>
                    {`${75}%`}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: 'white' }}>
              <Card.Body>

                <Card.Title>Profit</Card.Title>
                <Card.Text style={cardStyles}>
                  <div style={getProgressStyles3(45)}>
                    {`${45}%`}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
