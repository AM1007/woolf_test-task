import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import Page404 from 'pages/Page404/Page404';
import { Container, Header, Link } from './App.styled';
import Modal from 'pages/Modal/Modal';

const App = () => {
  const [selectedCamper, setSelectedCamper] = useState(null);

  const handleShowModal = camper => {
    setSelectedCamper(camper);
  };

  const handleHideModal = () => {
    setSelectedCamper(null);
  };

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
          element={<Catalog showModal={handleShowModal} />}
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
