// import Icon from 'components/Icon/Icon';
import Icon from 'components/Icon/Icon';
import {
  CheckboxBtn,
  CheckboxInput,
  CheckboxLabel,
  CheckboxName,
  CheckBoxTitle,
  CheсkboxWrapper,
  FormWrapper,
  Title,
  Underline,
} from './FilterVehicle.styled';

const FilterVehicle = () => {
  return (
    <>
      <Title>Filters</Title>
      <FormWrapper>
        <Underline>
          <CheckBoxTitle>Vehicle equipment</CheckBoxTitle>
        </Underline>
        <CheсkboxWrapper role="group" aria-labelledby="checkbox-group-type">
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name="airConditioner"
              value="airConditioner"
            />
            <Icon name="airConditioner" width="32px" height="32px" />
            <CheckboxName>AC</CheckboxName>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" name="automatic" value="automatic" />
            <Icon
              name="automatic"
              width="32px"
              height="32px"
              fill="transparent"
              stroke="#101828"
            />
            <CheckboxName>Automatic</CheckboxName>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" name="kitchen" value="kitchen" />
            <Icon
              name="kitchen"
              width="32px"
              height="32px"
              fill="transparent"
              stroke="#101828"
            />
            <CheckboxName>Kitchen</CheckboxName>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" name="TV" value="TV" />
            <Icon name="TV" width="32px" height="32px" />
            <CheckboxName>TV</CheckboxName>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" name="shower" value="shower" />
            <Icon name="TV" width="32px" height="32px" />
            <CheckboxName>Shower/WC</CheckboxName>
          </CheckboxLabel>
        </CheсkboxWrapper>

        <Underline>
          <CheckBoxTitle>Vehicle type</CheckBoxTitle>
        </Underline>
        <CheсkboxWrapper role="group" aria-labelledby="checkbox-group-type">
          <CheckboxLabel>
            <CheckboxInput type="radio" name="panelTruck" value="panelTruck" />
            <Icon name="van" width="40px" height="28px" />
            <CheckboxName>Van</CheckboxName>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="radio" name="alcove" value="alcove" />
            <Icon name="alcove" width="40px" height="28px" />
            <CheckboxName>
              Fully
              <br />
              Integrated
            </CheckboxName>
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="radio" name="alcove" value="alcove" />
            <Icon name="camper" width="40px" height="28px" />
            <CheckboxName>Alcove</CheckboxName>
          </CheckboxLabel>
        </CheсkboxWrapper>

        <CheckboxBtn type="submit">Search</CheckboxBtn>
      </FormWrapper>
    </>
  );
};

export default FilterVehicle;
