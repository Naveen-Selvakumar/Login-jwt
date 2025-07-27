import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">ProductStore</Link>
        <button className="btn btn-outline-light" onClick={logoutHandler}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
