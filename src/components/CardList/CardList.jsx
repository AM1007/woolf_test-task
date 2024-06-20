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

// import React, { useState, useEffect } from 'react';
// import { getData } from 'API/api';
// import Card from 'components/Card/Card';
// import { List, ListItem } from './CardList.styled';

// const CardList = ({ showModal, filterLocation }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getData();
//         setData(response);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         alert('Error data fetching!');
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredData = data.filter(camper =>
//     camper.location.toLowerCase().includes(filterLocation.toLowerCase())
//   );

//   return (
//     <List>
//       {filteredData.map(camper => (
//         <ListItem key={camper._id}>
//           <Card camper={camper} showModal={() => showModal(camper)} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default CardList;
