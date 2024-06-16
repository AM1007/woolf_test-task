import CloseBtn from 'components/Buttons/CloseBtn/CloseBtn';
import { Backdrop, Dialog } from './Modal.styled';

const Modal = ({ hideModal }) => {
  return (
    <Backdrop>
      <Dialog>
        <h1>Lorem ipsum dolor sit amet </h1>
        <CloseBtn onClick={hideModal}>Close</CloseBtn>
      </Dialog>
    </Backdrop>
  );
};

export default Modal;
