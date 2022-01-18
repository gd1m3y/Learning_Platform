
import Login from './components/Login';
import './App.css';
import Register from './components/Register';
import Courses from './components/Courses';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {useState} from 'react';
import Home from './components/Home';
import SimpleForm from './components/SimpleForm';


function App() {

  // chatbot
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }


  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('rajitha');
  const changeHandler = () => {
    setIsLogged(true);
    
  }
  const changeHandlerFalse = () => {
    setIsLogged(false);
  }


  return (
    <div>
      <Router>

        <div className="topnav">
          <div className="topnav-right">
            {!isLogged && <ul>
              <Link to='/login' ><li>Login</li></Link>
              <Link to='/register'><li>Register</li></Link>
            </ul>}
            {isLogged && <ul>
              <Link to='/main'>Welcome !</Link>
              </ul>}
          </div>
        </div>

        <Routes>
          <Route path="/login" element={<Login onLogin={changeHandler}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Courses onLogout={changeHandlerFalse} />}/>
          <Route path="/logout" element={<Courses />} />
        </Routes>
        <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="chatbtnP" onClick={() => startChat()}>click to chat... </button> 
            : <button className="chatbtnP" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div> 
      </Router>
       
    </div>
  );

}

export default App;
