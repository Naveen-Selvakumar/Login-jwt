import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', { email, password })
  .then(res => {
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    navigate('/home');
  })

      .catch(err => {
        alert('Login failed');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Login</button>
        <p className="mt-3">Don't have an account? <Link to="/signup">Signup</Link></p>
      </form>
    </div>
  );
}

export default Login;
