// SignupCompo.jsx
import React, { useState } from 'react';
import './SignupCompo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignupCompo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create your account</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Sign up</button>
      <p>Or continue with</p>
      <div className="socials">
        <FontAwesomeIcon icon={faGoogle} size="2x" onClick={() => alert("Google signup")} />
        <FontAwesomeIcon icon={faFacebook} size="2x" onClick={() => alert("Facebook signup")} />
      </div>
    </form>
  );
};

export default SignupCompo;
