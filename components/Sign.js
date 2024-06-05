import React, { useState } from 'react';
import './Sign.css';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="sign">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Sign;
