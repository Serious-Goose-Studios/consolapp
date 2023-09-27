import React  from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login.js';
import Home from './pages/home.js';
import ClubsPage from './pages/clubs.js';
import Test from './components/test.js';

  let App = function MyApp() {
    return (
      <div> 
        <Router>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/clubs' element={<ClubsPage />} />\
              <Route path='/test' element={<Test />} />
            </Routes>
        </Router>
      </div>
    );
  }

export default App;
