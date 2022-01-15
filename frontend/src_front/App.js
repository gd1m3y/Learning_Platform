
import Login from './components/Login';
import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

        <div className="topnav">
          <div class="topnav-right">
            <ul>
              <Link to='/login'><li><a >Login</a></li></Link>
              <Link to='/register'><li><a >Register</a></li></Link>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </Router>
    </div>
  );

}

export default App;
