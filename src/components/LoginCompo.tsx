// LoginCompo.jsx
import React, { useState } from 'react';
import './LoginCompo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LoginCompo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Sign in to your account</h2>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className='remember-me-container'>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <button type="submit">Sign in</button>
      <p>Or continue with</p>
      <div className="socials">
        <FontAwesomeIcon icon={faGoogle} size="2x" onClick={() => alert("Google login")} />
        <FontAwesomeIcon icon={faFacebook} size="2x" onClick={() => alert("Facebook login")} />
      </div>
    </form>
  );
};

export default LoginCompo;
