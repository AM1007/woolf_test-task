import FilterLocation from 'components/Filters/FilterLocation/FilterLocation';
import { CardContainer, FilterContainer, Section } from './Catalog.styled';
import CardList from 'components/CardList/CardList';
import FilterVehicle from 'components/Filters/FilterVehicle/FilterVehicle';

const Catalog = ({ showModal, handleChange, filterLocation, data }) => {
  return (
    <Section>
      <FilterContainer>
        <FilterLocation handleChange={handleChange} value={filterLocation} />
        <FilterVehicle />
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
