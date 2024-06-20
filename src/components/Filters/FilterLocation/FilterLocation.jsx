import Icon from 'components/Icon/Icon';
import { LocationInput, LocationLabel, Wrap } from './FilterLocation.styled';

const FilterLocation = ({ value, handleChange }) => {
  return (
    <Wrap>
      <LocationLabel>
        Loaction
        <LocationInput
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
        />
      </LocationLabel>
      <Icon
        name="location"
        width="18px"
        height="20px"
        stroke="#101828"
        fill="transparent"
        style={{ position: 'absolute', top: 49, left: 18 }}
      />
    </Wrap>
  );
};

export default FilterLocation;
