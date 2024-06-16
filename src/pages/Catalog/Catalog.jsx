import { CardContainer, FilterContainer, Section } from './Catalog.styled';
import CardList from 'components/CardList/CardList';

const Catalog = ({ showModal }) => {
  return (
    <Section>
      <FilterContainer>{/* <LocationSelect /> */}</FilterContainer>
      <CardContainer>
        <CardList showModal={showModal} />
      </CardContainer>
    </Section>
  );
};

export default Catalog;
