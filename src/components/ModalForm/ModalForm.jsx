import React, { useRef, useEffect } from 'react';
import {
  FeaturesBtn,
  FeaturesSendForm,
  FormInput,
  FormPhrase,
  FormTextarea,
  FromTitle,
} from './ModalForm.styled';

const handleSubmit = e => {
  e.preventDefault();
  console.log('event:', e);
  // Дополнительная логика для обработки данных формы
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
};

const handleChange = e => {
  console.log(e.target.value);
};

const ModalForm = ({ formRef }) => {
  const sendFormRef = useRef(null);
  // Зависимость высоты формы от высоты контейнера
  useEffect(() => {
    if (formRef.current && sendFormRef.current) {
      sendFormRef.current.style.height = '85%';
    }
  }, [formRef]);

  return (
    <>
      <FromTitle>Book your campervan now</FromTitle>
      <FormPhrase>Stay connected! We are always ready to help you.</FormPhrase>
      <FeaturesSendForm ref={sendFormRef} onSubmit={handleSubmit}>
        <label>
          <FormInput
            type="text"
            name="username"
            placeholder="Name"
            autoFocus
            aria-label="UserMail"
            onChange={handleChange}
          />
        </label>
        <label>
          <FormInput
            type="email"
            name="topic"
            placeholder="Email"
            aria-label="Email"
          />
        </label>
        <label>
          <FormInput
            type="date"
            placeholder="Booking date"
            aria-label="Calendar"
          />
        </label>
        <label>
          <FormTextarea
            name="description"
            placeholder="Comment"
            aria-label="description"
          ></FormTextarea>
        </label>
        <FeaturesBtn type="submit">Send</FeaturesBtn>
      </FeaturesSendForm>
    </>
  );
};

export default ModalForm;
