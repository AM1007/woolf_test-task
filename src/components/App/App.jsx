import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import Page404 from 'pages/Page404/Page404';
import { Container, Header, Link } from './App.styled';
import Modal from 'pages/Modal/Modal';
import { getData } from 'API/api';

const App = () => {
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [filterLocation, setFilterLocation] = useState('');
  const [data, setData] = useState([]);

  const handleShowModal = camper => {
    setSelectedCamper(camper);
  };

  const handleHideModal = () => {
    setSelectedCamper(null);
  };

  const handleFilterChange = event => {
    setFilterLocation(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error data fetching!');
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              showModal={handleShowModal}
              filterLocation={filterLocation}
              handleChange={handleFilterChange}
              data={data}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {selectedCamper && (
        <Modal camper={selectedCamper} hideModal={handleHideModal} />
      )}
    </Container>
  );
};

export default App;
