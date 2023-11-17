import React  from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login.js';
import Home from './pages/home.js';
import ClubsPage from './pages/clubs.js';
import HAC from './pages/HAC.js';
import Calendar from './pages/calendar.js';


//Server IP:174.138.56.80
let App = function MyApp() {
  return (
    <div> 
      <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/clubs' element={<ClubsPage />} />
            <Route path='/hac' element={<HAC />} />
            <Route path='/calendar' element={<Calendar />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
