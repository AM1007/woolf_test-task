import { Button } from './CloseBtn.styled';
import Icon from 'components/Icon/Icon';

const CloseBtn = ({ onClick }) => {
  return (
    <Button title="Close" type="button" onClick={onClick} aria-label="Close">
      <Icon name="cross" width="32" height="32" />
    </Button>
  );
};

export default CloseBtn;
