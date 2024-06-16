import React, { Component } from 'react';
import { getData } from 'API/api';
import Card from 'components/Card/Card';
import { List, ListItem } from './CardList.styled';

export default class CardList extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    try {
      const response = await getData();
      this.setState({ data: response });
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error data fetching!');
    }
  }

  render() {
    const { data } = this.state;
    const { showModal } = this.props;

    return (
      <List>
        {data.map(camper => (
          <ListItem key={camper._id}>
            <Card camper={camper} showModal={showModal} />
          </ListItem>
        ))}
      </List>
    );
  }
}
