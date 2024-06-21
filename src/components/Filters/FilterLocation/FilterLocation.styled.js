import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

export const LocationLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;

export const LocationInput = styled.input`
  padding: 18px 44px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  background: #f7f7f7;
  border-radius: 10px;
  border: none;
  outline: none;
`;
