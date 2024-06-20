import FilterLocation from 'components/Filters/FilterLocation/FilterLocation';
import { CardContainer, FilterContainer, Section } from './Catalog.styled';
import CardList from 'components/CardList/CardList';

const Catalog = ({ showModal, handleChange, filterLocation, data }) => {
  return (
    <Section>
      <FilterContainer>
        <FilterLocation handleChange={handleChange} value={filterLocation} />
      </FilterContainer>
      <CardContainer>
        <CardList
          showModal={showModal}
          filterLocation={filterLocation}
          data={data}
        />
      </CardContainer>
    </Section>
  );
};

export default Catalog;

// import FilterLocation from 'components/Filters/FilterLocation/FilterLocation';
// import { CardContainer, FilterContainer, Section } from './Catalog.styled';
// import CardList from 'components/CardList/CardList';

// const Catalog = ({ showModal, handleChange, filterLocation }) => {
//   return (
//     <Section>
//       <FilterContainer>
//         <FilterLocation handleChange={handleChange} value={filterLocation} />
//       </FilterContainer>
//       <CardContainer>
//         <CardList showModal={showModal} filterLocation={filterLocation} />
//       </CardContainer>
//     </Section>
//   );
// };

// export default Catalog;
