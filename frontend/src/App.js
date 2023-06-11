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
import WorkoutForm from './pages/WorkoutForm';
import Graph from './pages/Graph';
import WorkoutBase from './pages/WorkoutBase';

import NutritionHome from './pages/NutritionHome';
import NutritionWeightLoss from './pages/NutritionWeightLoss';
import NutritionWeightLossPlanMonday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanMonday';
import NutritionWeightLossPlanTuesday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanTuesday';
import NutritionWeightLossPlanWednesday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanFriday.js';
import NutritionWeightLossPlanThursday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanThursday';
import NutritionWeightLossPlanFriday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanFriday';
import NutritionWeightLossPlanSaturday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanSaturday';
import NutritionWeightLossPlanSunday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanSunday';


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
          <Route exact path='/WorkoutForm' element={<WorkoutForm/>}/>
          <Route exact path='/workout-history' element={<History />} />
          <Route exact path='/exercise-tracking' element={<Tracking />} />
          <Route exact path='/goal-setting' element={<Setting />} />
          <Route exact path='/workout-plan-creator' element={<Creator />} />
          <Route exact path='/user-dashboard' element={<UserDashboard />} />
          <Route exact path='/WorkoutBase' element={<WorkoutBase />} />
          <Route exact path='/workout-track' element={<Graph />} />

          <Route exact path='/nutritionHome' element={<NutritionHome />} />
          <Route exact path='/nutritionWeightLoss' element={<NutritionWeightLoss />} />
          <Route exact path='/nutritionWeightLossPlanMonday' element={<NutritionWeightLossPlanMonday />} />
          <Route exact path='/nutritionWeightLossPlanTuesday' element={<NutritionWeightLossPlanTuesday />} />
          <Route exact path='/nutritionWeightLossPlanWednesday' element={<NutritionWeightLossPlanWednesday />} />
          <Route exact path='/nutritionWeightLossPlanThursday' element={<NutritionWeightLossPlanThursday />} />
          <Route exact path='/nutritionWeightLossPlanFriday' element={<NutritionWeightLossPlanFriday />} />
          <Route exact path='/nutritionWeightLossPlanSaturday' element={<NutritionWeightLossPlanSaturday />} />
          <Route exact path='/nutritionWeightLossPlanSunday' element={<NutritionWeightLossPlanSunday />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
