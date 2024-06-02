// Login.jsx
import React, { useState } from 'react';
import LoginCompo from "../components/LoginCompo";
import SignupCompo from "../components/SignupCompo";
import '../components/LoginCompo.css'; // Import the CSS file for LoginCompo styles
import './Login.css'; // Import the CSS file for Login styles

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='main'>
      <div className="login-container">
        <div className="toggle-button">
          <button onClick={handleToggle}>{isLogin ? "Switch to Sign up" : "Switch to Login"}</button>
        </div>
        {isLogin ? <LoginCompo /> : <SignupCompo />}
      </div>
      <div className="image-container">
        <img src="https://i.ibb.co/tbftjgL/Signup-image.jpg" alt="Signup" className='image_signup' />
      </div>
    </div>
  );
};

export default Login;
