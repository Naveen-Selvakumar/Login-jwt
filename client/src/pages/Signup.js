import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/register', { name, email, password })
      .then(res => {
        alert('Registration successful');
        navigate('/');
      })
      .catch(err => {
        alert('Signup failed');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name"
            value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Signup</button>
        <p className="mt-3">Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;
