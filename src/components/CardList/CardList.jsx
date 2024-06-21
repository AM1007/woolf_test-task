import React from 'react';
import Card from 'components/Card/Card';
import { List, ListItem } from './CardList.styled';

const CardList = ({ showModal, filterLocation, data }) => {
  const filteredData = data.filter(camper =>
    camper.location.toLowerCase().includes(filterLocation.toLowerCase())
  );

  return (
    <List>
      {filteredData.map(camper => (
        <ListItem key={camper._id}>
          <Card camper={camper} showModal={() => showModal(camper)} />
        </ListItem>
      ))}
    </List>
  );
};

export default CardList;
