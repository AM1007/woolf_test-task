import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 14px;
`;

export const Underline = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const CheckBoxTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.form`
  /* border: 1px solid yellowgreen; */
`;

export const CheсkboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  column-gap: 10px;
  margin-bottom: 32px;
`;

export const CheckboxBtn = styled.button`
  margin-top: 32px;
  width: 160px;
  padding: 16px 60px;
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

export const CheckboxLabel = styled.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 113px;
  height: 95px;
  padding: 5px 0;

  &:hover {
    border: 1px solid #e44848;
  }
`;

export const CheckboxInput = styled.input`
  appearance: none;
`;

export const CheckboxName = styled.span`
  display: block;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #101828;
`;
