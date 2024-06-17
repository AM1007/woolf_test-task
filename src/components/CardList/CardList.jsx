import React, { useState, useEffect } from 'react';
import { getData } from 'API/api';
import Card from 'components/Card/Card';
import { List, ListItem } from './CardList.styled';

const CardList = ({ showModal }) => {
  const [data, setData] = useState([]);

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
    <List>
      {data.map(camper => (
        <ListItem key={camper._id}>
          <Card camper={camper} showModal={() => showModal(camper)} />
        </ListItem>
      ))}
    </List>
  );
};

export default CardList;
