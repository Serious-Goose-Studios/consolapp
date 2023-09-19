import React  from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login.js';
import Home from './pages/home.js';
import Clubs from './pages/clubs.js';

  let App = function MyApp() {
    return (
      <div> 
        <Router>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/clubs' element={<Clubs />} />
            </Routes>
        </Router>
      </div>
    );
  }

export default App;
