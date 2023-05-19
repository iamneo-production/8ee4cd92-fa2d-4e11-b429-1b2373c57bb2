import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./users/Register";
import Login from './users/Login';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Tracking from './pages/Tracking';
import Setting from './pages/Setting';
import Creator from './pages/Creator';
import UserDashboard from './pages/UserDashboard';
import UpdateProfile from './pages/Updateprofile';
import Workoutform from './pages/WorkoutForm';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Dashboard' element={<Dashboard />} />
          <Route exact path='/UpdateProfile' element={<UpdateProfile/>}/>
          <Route exact path='/WorkoutForm' element={<Workoutform/>}/>
          <Route exact path='/workout-history' element={<History />} />
          <Route exact path='/exercise-tracking' element={<Tracking />} />
          <Route exact path='/goal-setting' element={<Setting />} />
          <Route exact path='/workout-plan-creator' element={<Creator />} />
          <Route exact path='/user-dashboard' element={<UserDashboard />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
