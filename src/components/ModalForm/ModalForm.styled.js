import styled from 'styled-components';

export const FromTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  margin-bottom: 8px;
`;

export const FormPhrase = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 24px;
`;

export const FeaturesForm = styled.form`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  border: 0;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(16, 24, 40, 0.6);

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const FormTextarea = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 18px;
  flex-grow: 1;
  background: #f7f7f7;
  border: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(16, 24, 40, 0.6);
  outline: none;

  &::placeholder {
    position: absolute;
    top: 18px;
    left: 18px;
    transform: translateY(5px);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const FeaturesBtn = styled.button`
  width: 160px;
  padding: 16px 60px;
  margin-top: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #cc3d3d;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(228, 72, 72, 0.5);
  }
`;
