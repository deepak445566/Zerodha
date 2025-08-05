import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // tumhara dashboard component

const App = () => {
  const [loading, setLoading] = useState(true); // loading flag

  useEffect(() => {
    axios.get("http://localhost:3000/check-auth", {
      withCredentials: true,
    })
    .then((res) => {
      if (!res.data.authenticated) {
        window.location.href = "http://localhost:5173/login";
      } else {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.error("Auth check error:", err);
      window.location.href = "http://localhost:5173/login";
    });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
