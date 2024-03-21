import './App.css';
import {  useState } from "react";
import {  Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Player from './pages/Player';
import Login from './pages/Login';
//import Register from './pages/Register';

function App() {

  const navigate = useNavigate();


    // Example state to determine if user is authenticated
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    // Function to handle login
    const handleLogin = () => {
      // Simulate successful login
      setIsLoggedIn(true);
      // Navigate to dashboard after login
      navigate('/register');
    };
      return (
  <div>
       
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player"
        element={ <Player />}
            />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Redirect to login if not authenticated */}
        {isLoggedIn ? (
          <Route path="/dashboard" element={<Home />} />
        ) : (
          <Route path="/dashboard" element={<Login onLogin={handleLogin} />} />
        )}
      </Routes>
      
    </div>
  );
 }
export default App;
  


