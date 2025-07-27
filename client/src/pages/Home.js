import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) return navigate('/');
    try {
      const userRes = await axios.get('http://localhost:5000/api/users/me', {
        headers: { Authorization: `Bearer ${userInfo.token}` }
      });
      setUser(userRes.data);

      const prodRes = await axios.get('http://localhost:5000/api/products', {
        headers: { Authorization: `Bearer ${userInfo.token}` }
      });
      setProducts(prodRes.data);
    } catch (err) {
      localStorage.removeItem('userInfo');
      navigate('/');
    }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Welcome, {user.name}</h2>
        <div className="row mt-3">
          {products.map(product => (
            <div className="col-md-4" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
