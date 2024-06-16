import { Button } from './ShowBtn.styled';

const ShowBtn = ({ onClick, children }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ShowBtn;
