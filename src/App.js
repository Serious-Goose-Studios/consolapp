import React  from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/login.js';
import Home from './pages/home.js';

  let App = function MyApp() {
    return (
      <div> 
        <Router>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
      </div>
    );
  }

export default App;
