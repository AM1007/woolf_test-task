import {
  FeaturesBtn,
  FeaturesForm,
  FormInput,
  FormPhrase,
  FormTextarea,
  FromTitle,
} from './ModalForm.styled';

const handlesubmit = e => {
  e.preventDefault();
};

const ModalForm = () => {
  return (
    <>
      <FromTitle>Book your campervan now</FromTitle>
      <FormPhrase>Stay connected! We are always ready to help you.</FormPhrase>
      <FeaturesForm>
        <label>
          <FormInput type="text" name="username" placeholder="Name" autoFocus />
        </label>

        <label>
          <FormInput type="text" name="topic" placeholder="Email" />
        </label>

        <label>
          <FormInput type="date" placeholder="Booking date" />
        </label>

        <FormTextarea
          name="description"
          placeholder="Comment"
          aria-label="description"
        ></FormTextarea>

        <FeaturesBtn type="submit" onSubmit={handlesubmit}>
          Send
        </FeaturesBtn>
      </FeaturesForm>
    </>
  );
};

export default ModalForm;
